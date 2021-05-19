import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Pokemon/Sidebar/Sidebar';
import Main from 'components/Pokemon/Main/Main';
import Context from 'components/Pokemon/Context';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const Pokemon = ({isMoveset}) => {

  const { name } = useParams();
  let history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);

  //state for context
  const [selectedForm,setSelectedForm] = useState([true, false, false]);
  const [urls,setUrls] = useState([name]);
  const [numOfForms,setNumOfForms] = useState(3);
  const [pokemon,setPokemon] = useState({});
  const [species,setSpecies] = useState({});
  const [evolution,setEvolution] = useState({});

  const values = { isMoveset, selectedForm, setSelectedForm, numOfForms, pokemon,
  species, evolution };


  useEffect(()=>{

    //reset the params
    setIsPending(true);
    setIsError(false);

    let checkSource = axios.CancelToken.source();
    let source = axios.CancelToken.source();

    //check if this pokemon exists
    if(!isChecked)
    {
      axios.get(`/pokemon/checkIfExists/${name}`,{cancelToken:checkSource.token})
      .then(res=>{

        if(res.statusText!=="OK")
          throw new Error('error happened!');

        if(!res.data.exists)
          history.push('/');

        setIsChecked(true);
      })
      .catch(err=>{
        history.push('/');
      })

    }

    //load all the data and pass to context
    if(isChecked)
    {
      const index = selectedForm.indexOf(true);
      axios.get(`/pokemon/pokeInfo/${name}/${urls[index]}`,{cancelToken:source.token})
      .then(res=>{

        if(res.statusText!=="OK")
          throw new Error('error happened!');

        const len = res.data.species.varieties.length;

        console.log(res.data);

        setPokemon(res.data.pokemon);
        setSpecies(res.data.species);
        setEvolution(res.data.evolution);
        setNumOfForms(2+len);

        let arr = [];
        res.data.species.varieties.forEach(({pokemon:{name}}) => {
          arr.push(name);
        });
        setUrls(arr);

        setIsPending(false);
      })
      .catch(err=>{
        setIsError(true);
        setIsPending(false);
      });
    }


    return () => {
      checkSource.cancel("Cancelling in cleanup (checkSource)");
      source.cancel("Cancelling in cleanup (source)");
    }
  },[selectedForm, isChecked]);



  return(
    <Wrapper>
      {(isChecked && !isPending && !isError) &&
        <Context.Provider value={values}>
          <Sidebar/>
          <Main/>
        </Context.Provider>
      }
      { (isPending && !isError) && <Loading display="true"/> }
      { (isChecked && isError) && <Error display="true"/> }
    </Wrapper>
  )
};

Pokemon.defaultProps = {
  isMoveset: false
};

export default Pokemon;

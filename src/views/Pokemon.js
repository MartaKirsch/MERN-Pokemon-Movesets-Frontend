import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useCheck from 'hooks/useCheck';
import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Pokemon/Sidebar/Sidebar';
import Main from 'components/Pokemon/Main/Main';
import Context from 'components/Pokemon/Context';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const Pokemon = ({isMoveset}) => {

  const { name } = useParams();
  // const [isChecked, setIsChecked] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);

  //state for context
  const [selectedForm,setSelectedForm] = useState([true]);
  const [urls,setUrls] = useState([name]);
  const [numOfForms,setNumOfForms] = useState(1);
  const [pokemon,setPokemon] = useState({});
  const [species,setSpecies] = useState({});
  const [evolution,setEvolution] = useState({});

  const values = { isMoveset, selectedForm, setSelectedForm, numOfForms, pokemon,
  species, evolution };

  //hook for checking - if pokemon exists
  const { isOK: isChecked } = useCheck(`/pokemon/checkIfExists/${name}`,"/",true);

  useEffect(()=>{

    //reset the params
    let source = axios.CancelToken.source();

    //load all the data and pass to context
    if(isChecked)
    {
      //reset query state
      setIsError(false);
      setIsPending(true);

      const index = selectedForm.indexOf(true);

      axios.post(`/pokemon/pokeInfo/${urls[index]}`, {species:name, cancelToken:source.token})
      .then(res=>{

        if(res.statusText!=="OK")
          throw new Error('error happened!');

        const len = res.data.species.varieties.length;

        setPokemon(res.data.pokemon);
        setSpecies(res.data.species);
        setEvolution(res.data.evolution);
        setNumOfForms(len);

        let arr = [];
        res.data.species.varieties.forEach(({pokemon:{name}}) => {
          arr.push(name);
        });
        if(JSON.stringify(arr)!==JSON.stringify(urls))
        {
          setSelectedForm([true]);
        }
        setUrls(arr);

        setIsPending(false);
      })
      .catch(err=>{
        if(err.name && err.name !== "AbortError")
        {
          setIsError(true);
          setIsPending(false);
        }
      });
    }


    return () => {
      source.cancel("Cancelling in cleanup (source)");
    }
  },[selectedForm, isChecked, name]);



  return(
    <Wrapper>
      {(isChecked && !isPending && !isError) &&
        <Context.Provider value={values}>
          <Sidebar/>
          <Main/>
        </Context.Provider>
      }
      { (isPending && !isError) && <Loading display="true"/> }
      { (isError) && <Error display="true"/> }
    </Wrapper>
  )
};

Pokemon.defaultProps = {
  isMoveset: false
};

export default Pokemon;

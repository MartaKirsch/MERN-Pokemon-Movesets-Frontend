import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useCheck from 'hooks/useCheck';
import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Moveset/Sidebar/Sidebar';
import Main from 'components/Moveset/Main/Main';
import Context from 'components/Moveset/Context';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const Moveset = () => {

  //the name is of a pokemon and NOT a species
  const { name, id } = useParams();

  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);

  //state for context
  const [moveset, setMoveset] = useState({});
  const [pokemonData, setPokemonData] = useState({});
  const [species, setSpecies] = useState({});
  const values = {moveset, setMoveset, pokemonData, setPokemonData, species, setSpecies};

  //hook for checking - if pokemon exists
  const { isOK: isChecked } = useCheck(`/moveset/existsById/${id}`,`/`,true);

  useEffect(()=>{

    //reset the params
    let source = axios.CancelToken.source();

    //load all the data and pass to context
    if(isChecked)
    {
      //reset query state
      setIsError(false);
      setIsPending(true);

      axios.get(`/moveset/${name}/${id}`, {cancelToken:source.token})
      .then(res=>{

        if(res.statusText!=="OK")
          throw new Error('error happened!');

        setMoveset(res.data.moveset);
        setPokemonData(res.data.pokemon);
        setSpecies(res.data.species);

        setIsPending(false);
        setIsError(false);
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
  },[isChecked,id]);



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


export default Moveset;

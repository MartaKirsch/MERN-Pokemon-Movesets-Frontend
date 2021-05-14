import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Home/Sidebar/Searchbar/HintsList/HintsList';

const Searchbar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [pokedex, setPokedex] = useState([]);
  const [hints, setHints] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const ref = useRef(null);

  useEffect(()=>{
    //onclick event on window
    window.addEventListener('click',checkClicked);

    let source = axios.CancelToken.source();

    setIsPending(true);
    setIsError(false);

    //load full pokedex list for hints
    axios.get(`/pokemon/loadFullPokedex`, {cancelToken: source.token}).then(res=>{
      if(res.statusText!=="OK")
      {
        throw new Error("Error");
      }

      setPokedex(res.data.pokedex);
      setIsPending(false);

    }).catch(err=>{
      setIsPending(false);
      setIsError(true);
    });


    return () => {
      source.cancel("Cancelling in cleanup");
      window.removeEventListener('click',checkClicked);
    }
  },[]);

  const checkClicked = e => {
    if(!ref.current)
      return;

    if(e.target !== ref.current.querySelector('input') && e.target.parentNode !== ref.current)
    {
      setIsVisible(false);
    }
  }

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleChange = (val) => {

    //check if the field is empty
    if(val==="")
    {
      setHints([]);
      return;
    }

    const reg = new RegExp('^'+val);

    //reset hints
    setHints([]);

    //load new hints
    let arr=[];

    pokedex.forEach(({name}) => {
      if(name.match(reg))
        arr.push(name);
    });

    //set new hints
    setHints(arr);
  };

  return(
    <Wrapper>
      <span className="wrapper" ref={ref}>
        <input
        type="search"
        placeholder="Search for Pokemon"
        onFocus={handleFocus}
        onChange={e=>{setSearchPhrase(e.target.value);handleChange(e.target.value);}}
        value={searchPhrase}
        />
        <span className="line"></span>
        <HintsList
        display={isVisible.toString()}
        isError={isError}
        isPending={isPending}
        hints={hints}
        />
      </span>
    </Wrapper>
  )
};

export default Searchbar;

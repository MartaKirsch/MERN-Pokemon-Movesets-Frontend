import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';

const useLoadMovesets = (url,listRef,pokeName) => {
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [skip, setSkip] = useState(0);
  const { pokemon, setPokemon } = useContext(SidebarContext);

  useEffect(()=>{
    let source = axios.CancelToken.source();

    if(skip===0)
      setItems([]);
    
    setIsPending(true);
    setIsError(false);


    axios.post(url, {skip, pokemon, pokeName, cancelToken: source.token}).then(res=>{
      if(res.statusText!=="OK")
      {
        throw new Error("Error");
      }

      let arr = [];
      if(skip!==0)
        arr=[...items];
      arr = arr.concat(res.data.movesets);
      setItems(arr);

      setIsPending(false);

    }).catch(err=>{
      if(err.name && err.name!=="AbortError")
      {
        setIsPending(false);
        setIsError(true);
      }
    });


    return () => {
      source.cancel("Cancelling in cleanup");
    }

  },[skip,pokemon]);

  useEffect(()=>{
    setSkip(0)
  },[pokemon]);

  return { items, isError, isPending, skip, setSkip, pokemon, setPokemon };
};

export default useLoadMovesets;

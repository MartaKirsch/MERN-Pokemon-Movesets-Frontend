import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoadHints = (url,input) => {
  const [ isPending, setIsPending ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ hints, setHints ] = useState([]);
  const [selectedHints, setSelectedHints] = useState([]);

  useEffect(()=>{
    //reset
    setIsError(true);
    setIsPending(true);
    let source = axios.CancelToken.source();

    axios.get(url)
    .then(res=>{

      if(res.statusText!=="OK")
        throw new Error('error happened!');

      const list = res.data.list.map(item=>item.name);

      setHints(list);
      setSelectedHints(list);
      setIsError(false);
      setIsPending(false);
    })
    .catch(err=>{
      if(err.name !=="AbortError")
      {
        setIsError(true);
        setIsPending(false);
      }
    })

    return () => {
      source.cancel("Cancelling in cleanup (checkSource)");
    }

  },[url]);

  useEffect(()=>{
    //select based on input
    if(input==="")
      return;

    let selected = [];
    const reg = new RegExp('^'+input);
    hints.forEach(item => {
      if(reg.test(item))
        selected.push(item);
    });
    setSelectedHints(selected);

  },[input]);

  return { isPending, isError, hints, selectedHints };
};

export default useLoadHints;

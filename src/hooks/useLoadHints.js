import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoadHints = (url, input) => {

  const [ isPending, setIsPending ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ hints, setHints ] = useState([]);
  const [selectedHints, setSelectedHints] = useState([]);

  useEffect(()=>{
    let mounted = true;

    if(mounted)
    {
      //reset
      setIsError(false);
      setIsPending(true);
    }
    let source = axios.CancelToken.source();

    axios.get(url)
    .then(res=>{
      if(res.statusText!=="OK")
        throw new Error('error happened!');

      const list = res.data.list.map(item=>item.name);

      if(mounted)
      {
        setHints(list);
        setSelectedHints(list);
        setIsError(false);
        setIsPending(false);
      }
    })
    .catch(err=>{
      if(err.name !=="AbortError" && mounted)
      {
        setIsError(true);
        setIsPending(false);
      }
    })

    return () => {
      mounted=false;
      source.cancel("Cancelling in cleanup (checkSource)");
    }

  },[url]);

  useEffect(()=>{
    let mounted = true;

    //check if input isn't containing troublesome chars
    const charsReg = /^\w{1,}$/;
    if(!charsReg.test(input) && input!=="")
      return;

    //select based on input
    let selected = [];
    const reg = new RegExp('^'+input,"i");
    hints.forEach(item => {
      if(reg.test(item))
        selected.push(item);
    });

    if(mounted)
      setSelectedHints(selected);

    return () => mounted=false;

  },[input]);

  return { isPending, isError, hints, selectedHints };
};

export default useLoadHints;

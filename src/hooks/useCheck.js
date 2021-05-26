import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useCheck = (url, pushUrl="",pushOnErr=false) => {
  const [isOK, setIsOK] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  useEffect(()=>{
    //reset the params
    setIsPending(true);
    setIsError(false);

    let checkSource = axios.CancelToken.source();


    axios.get(url,{cancelToken:checkSource.token})
    .then(res=>{

      if(res.statusText!=="OK")
        throw new Error('error happened!');


      if(!res.data.isOK && pushUrl!=="")
        history.push(pushUrl);

      setIsOK(res.data.isOK);
      setIsError(false);
      setIsPending(false);
    })
    .catch(err=>{
      if(err.name !=="AbortError")
      {
        if(pushOnErr && pushUrl!=="")
          history.push(pushUrl);
        setIsError(true);
        setIsPending(false);
      }
    })



    return () => {
      checkSource.cancel("Cancelling in cleanup (checkSource)");
    }

  },[url]);

  return { isPending, isError, isOK };
};

export default useCheck;

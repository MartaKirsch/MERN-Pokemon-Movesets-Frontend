import { useEffect, useState } from 'react';
const useHideHints = (ref) => {
  const [isVisible, setIsVisible] = useState(false);


  //add event for showing/hiding hints
  useEffect(()=>{
    window.addEventListener('click',checkClicked);

    return () => {
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

  return { isVisible, setIsVisible };
};

export default useHideHints;

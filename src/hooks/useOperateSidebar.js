import { useContext, useEffect } from 'react';
import ShowSidebarContext from 'components/ShowSidebarContext';

const useOperateSidebar = (ref) => {
  const { showSidebar, setShowSidebar } = useContext(ShowSidebarContext);


  //add event for showing/hiding sidebar
  useEffect(()=>{
    //reset sidebar visibility
    setShowSidebar(false);

    window.addEventListener('click',checkClicked);

    return () => {
      window.removeEventListener('click',checkClicked);
    }
  },[]);

  const checkClicked = e => {
    if(!ref.current)
      return;
    

    if(e.target !== ref.current && !ref.current.contains(e.target) && e.target.parentNode !== ref.current)
    {
      if(!e.target.parentNode.classList.contains('menu') || !e.target.classList.contains('menu'))
        setShowSidebar(false);
    }
  };
};

export default useOperateSidebar;

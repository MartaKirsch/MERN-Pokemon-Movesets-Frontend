import { useEffect } from 'react';
import useLoadHints from 'hooks/useLoadHints';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const HintsList = ({display, setter, url, input, validitySetter}) => {

  const { selectedHints, hints, isError, isPending } = useLoadHints(url,input);

  const handleClick = (e,hint) => {
    e.preventDefault();
    setter(hint);
  }

  useEffect(()=>{


    if(input==="")
      return;

    //check if input is in hints list
    if(hints.indexOf(input)===-1)
      validitySetter(0);
    else
      validitySetter(1);


  },[input]);

  return(
    <Wrapper display={display}>
      {isPending && <Loading display="true" isInHints="true"/>}
      {isError && <Error display="true" isInHints="true"/>}
      {
        (!isPending && !isError) && selectedHints.map(hint=>
          <li key={hint}>
            <button onClick={e=>handleClick(e,hint)}>{hint}</button>
          </li>
        )
      }
    </Wrapper>
  );
};


export default HintsList;

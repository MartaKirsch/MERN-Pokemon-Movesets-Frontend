import { useState, useEffect } from 'react';
import axios from 'axios';
import useLoadHints from 'hooks/useLoadHints';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const HintsList = ({display, setter, url, input}) => {

  const { selectedHints, hints, isError, isPending } = useLoadHints(url,input);

  const handleClick = (e,hint) => {
    e.preventDefault();
    setter(hint);
  }

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

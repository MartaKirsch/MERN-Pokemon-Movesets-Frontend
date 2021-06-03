import { useEffect } from 'react';
import useLoadHints from 'hooks/useLoadHints';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const HintsList = ({display, setter, url, input}) => {

  const { selectedHints, isError, isPending } = useLoadHints(url,input);

  return(
    <Wrapper display={display}>
      {isPending && <Loading display="true" isInHints="true"/>}
      {isError && <Error display="true" isInHints="true"/>}
      {
        (!isPending && !isError) && selectedHints.map(hint=>
          <li key={hint}>
            <button onClick={e=>setter(hint)}>{hint}</button>
          </li>
        )
      }
    </Wrapper>
  );
};


export default HintsList;

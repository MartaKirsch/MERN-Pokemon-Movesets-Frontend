import { useState } from 'react';
import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Pokemon/Sidebar/Sidebar';
import Main from 'components/Pokemon/Main/Main';
import Context from 'components/Pokemon/Context';

const Pokemon = ({isMoveset}) => {

  const values = { isMoveset };

  return(
    <Wrapper>
      <Context.Provider value={values}>
        <Sidebar/>
        <Main/>
      </Context.Provider>
    </Wrapper>
  )
};

Pokemon.defaultProps = {
  isMoveset: false
};

export default Pokemon;

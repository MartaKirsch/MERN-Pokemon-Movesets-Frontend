import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useCheck from 'hooks/useCheck';
import Wrapper from 'components/Home/Wrapper';
import Form from 'components/Add/Form/Form';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const Add = () => {

  let history = useHistory();

  //hook for checking - if user is logged in
  const { isOK: isLoggedIn, isPending, isError } = useCheck('user/checkIfLoggedIn');

  useEffect(()=>{
    if(!isPending && !isError && !isLoggedIn)
      history.push('/account');
  },[isLoggedIn]);

  return(
    <Wrapper>
      {(isLoggedIn) && <Form/>}
      {(!isPending && isError) && <Error display="true"/>}
      {(isPending && !isError) && <Loading display="true"/>}

    </Wrapper>
  )
};

export default Add;

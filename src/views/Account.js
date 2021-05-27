import { useEffect } from 'react';
import Wrapper from 'components/Home/Wrapper';
import LogIn from 'components/Account/LogIn/LogIn';
import UserAccount from 'components/Account/UserAccount/UserAccount';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import useCheck from 'hooks/useCheck';

const Account = () => {

  //hook for checking - if user is logged in
  const { isOK: isLoggedIn, isPending, isError } = useCheck('user/checkIfLoggedIn');

  useEffect(()=>{

  },[]);

  return(
    <Wrapper>
      {(!isPending && !isError && !isLoggedIn) && <LogIn/>}
      {(!isPending && !isError && isLoggedIn) && <UserAccount/>}
      {(!isPending && isError) && <Error display="true"/>}
      {(isPending && !isError) && <Loading display="true"/>}
    </Wrapper>
  )
};

export default Account;

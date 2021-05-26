import { useState } from 'react';
import Wrapper from 'components/Account/LogIn/Wrapper';
import Text from 'components/Account/LogIn/Text';
import LogInForm from 'components/Account/LogIn/LogInForm/LogInForm';
import RegisterForm from 'components/Account/LogIn/RegisterForm/RegisterForm';

const text1 = "Don’t have an account yet? Let’s get you registered!";
const text2 = "Already have an account? Click here to log in!";

const LogIn = () => {

  const [isRegister, setIsRegister] = useState(false);

  return(
    <Wrapper>
      {!isRegister && <LogInForm/>}
      {isRegister && <RegisterForm/>}
      <Text onClick={()=>setIsRegister(!isRegister)}>
        {!isRegister ? text1 : text2}
      </Text>
    </Wrapper>
  )
};

export default LogIn;

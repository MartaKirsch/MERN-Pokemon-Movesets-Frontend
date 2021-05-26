import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Wrapper from 'components/Account/LogIn/LogInForm/Wrapper';
import Button from 'components/Account/LogIn/LogInForm/Button';
import LoginInput from 'components/Account/LogIn/RegisterForm/Inputs/LoginInput';
import EmailInput from 'components/Account/LogIn/RegisterForm/Inputs/EmailInput';
import PasswordInput from 'components/Account/LogIn/RegisterForm/Inputs/PasswordInput';
import Context from 'components/Account/LogIn/RegisterForm/Context';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const RegisterForm = () => {

  let history = useHistory();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errors, setErrors] = useState([1,1,1]);
  const [inits, setInits] = useState([0,0,0]);

  //register query
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const values = { login, setLogin, email, setEmail, passwd, setPasswd, errors, setErrors, inits, setInits };

  const handleSubmit = e => {
    e.preventDefault();

    if(isError)
      return;

    const sum = errors.reduce((a, b) => a + b, 0);
    if(sum!==0)
      return;

    //if no errors - register

    setIsPending(true);

    axios.post('/user/register',{login, email, passwd})
    .then(res=>{
      if(res.statusText!=="OK")
        throw new Error('error happened!');

      if(!res.data.registered)
      {
        setIsError(true);
        setIsPending(false);
      }
      else
      {
        //redirect
        setIsPending(false);
        history.go(0);
      }
    })
    .catch(err=>{
      setIsPending(false);
      setIsError(true);
    })

  }

  return(
    <Wrapper onSubmit={handleSubmit}>
      {(!isPending && !isError) && <Button/>}
      {isPending && <Loading display="true"/>}
      {isError && <Error display="true"/>}
      <Context.Provider value={values}>
        <LoginInput/>
        <EmailInput/>
        <PasswordInput/>
      </Context.Provider>


    </Wrapper>
  )
};

export default RegisterForm;

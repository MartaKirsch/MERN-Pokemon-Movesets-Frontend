import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Wrapper from 'components/Account/LogIn/LogInForm/Wrapper';
import { default as InputWrapper } from 'components/Account/LogIn/LogInForm/Inputs/Wrapper';
import Button from 'components/Account/LogIn/LogInForm/Button';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const LogInForm = () => {

  let history = useHistory();

  const [login, setLogin] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errors, setErrors] = useState([0,0]);

  //login query
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    //check if empty
    let arr = [0,0];
    if(login==="")
      arr[0] = 1;

    if(passwd==="")
      arr[1] = 1;

    setErrors(arr);

    //if any is empty - return
    if(passwd==="" || login==="")
      return;

    //check data in db
    setIsPending(true);

    axios.post('/user/logIn',{login, passwd})
    .then(res=>{
      if(res.statusText!=="OK")
        throw new Error('error happened!');

      if(res.data.loggedIn===false)
      {
        setIsPending(false);
        setErrors([1,1]);
      }
      else
      {
        //redirect
        setIsPending(false);

        //check if redirect was forced
        if(sessionStorage.getItem('redirectUrl'))
        {
          const url = sessionStorage.getItem('redirectUrl');
          sessionStorage.removeItem('redirectUrl');
          history.push(url);
        }
        else
          history.go(0);
      }
    })
    .catch(err=>{
      setIsPending(false);
      setIsError(true);
    })
  }

  const handleChange = (e,setter) => {
    setter(e.target.value);

    let arr = [...errors];
    const index = e.target.dataset.num;

    if(e.target.value==="")
      arr[index]=1;
    else
      arr[index]=0;

    setErrors(arr);
  };

  return(
    <Wrapper onSubmit={handleSubmit}>
      {(!isPending && !isError) && <Button/>}
      {isPending && <Loading display="true"/>}
      {isError && <Error display="true"/>}

      <InputWrapper>
        <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={e=>handleChange(e,setLogin)}
        data-num="0"
        />
        <span className={errors[0] ? "line red" : "line"}></span>
      </InputWrapper>

      <InputWrapper>
        <input
        type="password"
        placeholder="Password"
        value={passwd}
        onChange={e=>handleChange(e,setPasswd)}
        data-num="1"
        />
        <span className={errors[1] ? "line red" : "line"}></span>
      </InputWrapper>
    </Wrapper>
  )
};

export default LogInForm;

import { useContext } from 'react';
import axios from 'axios';
import Wrapper from 'components/Account/LogIn/LogInForm/Inputs/Wrapper';
import Context from 'components/Account/LogIn/RegisterForm/Context';

const LoginInput = () => {

  const { login, setLogin, errors, setErrors, inits, setInits  } = useContext(Context);

  const handleChange = e => {
    //set new value
    setLogin(e.target.value);

    //input index
    const index = e.target.dataset.num;

    //set inits
    if(!inits[index])
    {
      let initsArr=[...inits];
      initsArr[index]=1;
      setInits(initsArr);
    }

    //check if value is valid
    let arr = [...errors];
    const reg = /^[\w-]{3,30}$/;
    if(!reg.test(e.target.value))
    {
      arr[index]=1;
      setErrors(arr);
      return;
    }
    else
    {
      arr[index]=0;
      setErrors(arr);
    }

    //check if username already exists
    axios.get(`/user/checkIfExists/${e.target.value}`)
    .then(res=>{

      if(res.statusText!=="OK")
        throw new Error('error happened!');

      if(res.data.exists)
      {
        arr = [...errors];
        arr[index]=1;
        setErrors(arr);
      }

    })
    .catch(err=>{
      arr = [...errors];
      arr[index]=1;
      setErrors(arr);
    })
  };

  return(
    <Wrapper>
      <input
      type="text"
      placeholder="Login"
      name="login"
      value={login}
      onChange={handleChange}
      onFocus={handleChange}
      data-num="0"
      />
      <span className={(errors[0] && inits[0]) ? "line red" : "line"}></span>
    </Wrapper>
  )
};

export default LoginInput;

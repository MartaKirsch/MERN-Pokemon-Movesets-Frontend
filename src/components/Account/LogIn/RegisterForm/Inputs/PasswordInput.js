import { useContext } from 'react';
import Wrapper from 'components/Account/LogIn/LogInForm/Inputs/Wrapper';
import Context from 'components/Account/LogIn/RegisterForm/Context';

const PasswordInput = () => {

  const { passwd, setPasswd, errors, setErrors, inits, setInits  } = useContext(Context);

  const handleChange = e => {
    //set new value
    setPasswd(e.target.value);

    //input index
    const index = e.target.dataset.num;

    //set inits
    if(!inits[index])
    {
      let initsArr=[...inits];
      initsArr[index]=1;
      setInits(initsArr);
    }

    //check if email is valid
    let arr = [...errors];
    const reg = /^[\w-]{3,30}$/;
    if(reg.test(e.target.value))
    {
      arr[index]=0;
      setErrors(arr);
    }
    else
    {
      arr[index]=1;
      setErrors(arr);
    }

  };

  return(
    <Wrapper>
      <input
      type="password"
      placeholder="Password"
      name="password"
      value={passwd}
      onChange={handleChange}
      onFocus={handleChange}
      data-num="2"
      />
      <span className={(errors[2] && inits[2]) ? "line red" : "line"}></span>
    </Wrapper>
  )
};

export default PasswordInput;

import { useContext } from 'react';
import axios from 'axios';
import Wrapper from 'components/Account/LogIn/LogInForm/Inputs/Wrapper';
import Context from 'components/Account/LogIn/RegisterForm/Context';

const EmailInput = () => {

  const { email, setEmail, errors, setErrors, inits, setInits } = useContext(Context);

  const handleChange = e => {
    //set new value
    setEmail(e.target.value);

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
    const reg = /^[A-Z0-9._%+-]{1,64}@[A-Z0-9._%+-]+\.[a-z]{2,}$/i;
    if(reg.test(e.target.value))
    {
      arr[index]=0;
      setErrors(arr);
    }
    else
    {
      arr[index]=1;
      setErrors(arr);
      return;
    }

    //check if email already exists
    axios.get(`/user/checkIfEmailExists/${e.target.value}`)
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
      placeholder="Email"
      name="email"
      value={email}
      onChange={handleChange}
      onFocus={handleChange}
      data-num="1"
      />
      <span className={(errors[1] && inits[1]) ? "line red" : "line"}></span>
    </Wrapper>
  )
};

export default EmailInput;

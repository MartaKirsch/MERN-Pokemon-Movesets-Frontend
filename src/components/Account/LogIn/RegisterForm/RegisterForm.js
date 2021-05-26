import { useState } from 'react';
import Wrapper from 'components/Account/LogIn/LogInForm/Wrapper';
import Button from 'components/Account/LogIn/LogInForm/Button';

const RegisterForm = () => {

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errors, setErrors] = useState([0,0,0]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  return(
    <Wrapper onSubmit={handleSubmit}>
      <Button/>

      <span className="wrapper">
        <input
        type="text"
        placeholder="Login"
        name="login"
        value={login}
        onChange={e=>setLogin(e.target.value)}
        data-num="0"
        />
        <span className={errors[0] ? "line red" : "line"}></span>
      </span>

      <span className="wrapper">
        <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        data-num="1"
        />
        <span className={errors[1] ? "line red" : "line"}></span>
      </span>

      <span className="wrapper">
        <input
        type="password"
        placeholder="Password"
        name="password"
        value={passwd}
        onChange={e=>setPasswd(e.target.value)}
        data-num="2"
        />
        <span className={errors[2] ? "line red" : "line"}></span>
      </span>
    </Wrapper>
  )
};

export default RegisterForm;

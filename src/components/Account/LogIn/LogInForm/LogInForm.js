import Wrapper from 'components/Account/LogIn/LogInForm/Wrapper';
import Button from 'components/Account/LogIn/LogInForm/Button';

const LogInForm = () => {

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
        />
        <span className="line"></span>
      </span>

      <span className="wrapper">
        <input
        type="password"
        placeholder="Password"
        />
        <span className="line"></span>
      </span>
    </Wrapper>
  )
};

export default LogInForm;

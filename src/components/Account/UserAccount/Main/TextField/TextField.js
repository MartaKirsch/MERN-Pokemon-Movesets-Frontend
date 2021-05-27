import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Wrapper from 'components/Home/Main/TextField/Wrapper';

const TextField = () => {

  let history = useHistory();

  const handleClick = () => {
    axios.get('user/logOut').then(res=>{
      if(res.statusText!=="OK")
        throw new Error("Error occured!")

      history.go(0);
    })
    .catch(err=>{
      console.log(err);
    });
  };

  return(
    <Wrapper>
      <button className="logout" onClick={handleClick}>Log Out</button>
    </Wrapper>
  )
};

export default TextField;

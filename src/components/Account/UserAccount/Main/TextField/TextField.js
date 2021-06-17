import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useCheck from 'hooks/useCheck';
import Wrapper from 'components/Home/Main/TextField/Wrapper';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';

const TextField = () => {

  let history = useHistory();

  const { isError, isPending, additional } = useCheck('/user/username');

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
      {(isPending && !isError) && <Loading/>}
      {(!isPending && isError) && <Error/>}
      {(!isPending && !isError) && <h1>Welcome {additional}!</h1>}
      <button className="logout" onClick={handleClick}>Log Out</button>
    </Wrapper>
  )
};

export default TextField;

import Wrapper from 'components/Navbar/Wrapper';
import Button from 'components/Navbar/Button/Button';

const Navbar = () =>{
  return(
    <Wrapper>
      <Button img="home" color="grey" url="/"/>
      <Button img="add" color="yellow" url="/add"/>
      <Button img="user" color="pistachio" url="/account"/>
    </Wrapper>
  )
};


export default Navbar;

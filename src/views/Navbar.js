import Wrapper from 'components/Navbar/Wrapper';
import Button from 'components/Navbar/Button/Button';

const Navbar = () =>{
  return(
    <Wrapper>
      <Button img="home" color="grey"/>
      <Button img="add" color="yellow" />
      <Button img="user" color="pistachio"/>
    </Wrapper>
  )
};


export default Navbar;

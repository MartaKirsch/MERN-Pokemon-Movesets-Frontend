import Wrapper from 'components/Navbar/Wrapper';
import Button from 'components/Navbar/Button/Button';
import NoLinkButton from 'components/Navbar/Button/NoLinkButton';

const Navbar = () =>{
  return(
    <Wrapper>
      <Button img="home" color="grey" url="/"/>
      <Button img="add" color="yellow" url="/add"/>
      <Button img="user" color="pistachio" url="/account"/>
      <NoLinkButton img="menu" color="blue"/>
    </Wrapper>
  )
};


export default Navbar;

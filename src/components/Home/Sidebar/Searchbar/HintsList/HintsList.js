import { Link } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';


const HintsList = ({display}) => {
  return(
    <Wrapper display={display}>
      <li><Link to="/">bulbasaur</Link></li>
      <li><Link to="/">ivysaur</Link></li>
      <li><Link to="/">venusaur</Link></li>
      <li><Link to="/">charmander</Link></li>
      <li><Link to="/">charmeleon</Link></li>
      <li><Link to="/">charizard</Link></li>
    </Wrapper>
  );
};

export default HintsList;

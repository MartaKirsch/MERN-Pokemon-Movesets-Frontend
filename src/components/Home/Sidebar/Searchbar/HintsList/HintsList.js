import { Link } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';
import Loading from 'components/Home/Sidebar/PokemonList/Loading/Loading';
import Error from 'components/Home/Sidebar/PokemonList/Error/Error';


const HintsList = ({display, isError, isPending, hints}) => {

  return(
    <Wrapper display={display}>
      {isPending && <Loading display="true"/>}
      {isError && <Error display="true"/>}
      {
        hints.map(hint=><li key={hint}><Link to={`/${hint}`}>{hint}</Link></li>)
      }
    </Wrapper>
  );
};

export default HintsList;

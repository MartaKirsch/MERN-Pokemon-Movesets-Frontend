import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/Header/Wrapper';
import { Link } from 'react-router-dom';
import Context from 'components/Moveset/Context';

const Header = () => {

  const { species, pokemonData } = useContext(Context);

  return(
    <Wrapper isMoveset>
      <Link to={`/pokemon/${species.name}`}>{pokemonData.name}</Link>
    </Wrapper>
  )
};

export default Header;

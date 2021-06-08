import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/Header/Wrapper';
import { Link } from 'react-router-dom';
import Context from 'components/Moveset/Context';

const Header = () => {

  const { species } = useContext(Context);

  return(
    <Wrapper isMoveset>
      <Link to={`/pokemon/${species.name}`}>{species.name}</Link>
    </Wrapper>
  )
};

export default Header;

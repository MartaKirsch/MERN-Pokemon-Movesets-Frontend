import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/Header/Wrapper';
import Button from 'components/Pokemon/Main/Header/Button';
import { Link } from 'react-router-dom';
import {ReactComponent as ArrowL} from 'imgs/arrow-left.svg';
import {ReactComponent as ArrowR} from 'imgs/arrow-right.svg';
import Context from 'components/Pokemon/Context';

const Header = () => {

  const { species, pokemon } = useContext(Context);


  const { id } = species;

  let nextId = id+1;
  if (nextId >= 899)
    nextId=898;

  let prevId = id-1;
  if (prevId <= 0)
    prevId=1;

  return(
    <Wrapper>
      <Button>
        <Link to={`/pokemon/${prevId}`} className="buttonLink">
          <div className="frame">
            <ArrowL/>
          </div>
          <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prevId}.png`}
          alt=""/>
        </Link>
      </Button>

      <Link to={`/pokemon/${species.name}`}>{pokemon.name}</Link>

      <Button>
        <Link to={`/pokemon/${nextId}`} className="buttonLink">
          <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nextId}.png`}
          alt=""/>
          <div className="frame">
            <ArrowR/>
          </div>
        </Link>
      </Button>
    </Wrapper>
  )
};

export default Header;

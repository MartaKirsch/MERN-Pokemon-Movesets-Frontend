import { useParams } from "react-router-dom";
import Wrapper from 'components/Pokemon/Main/Header/Wrapper';
import Button from 'components/Pokemon/Main/Header/Button';
import { Link } from 'react-router-dom';
import {ReactComponent as ArrowL} from 'imgs/arrow-left.svg';
import {ReactComponent as ArrowR} from 'imgs/arrow-right.svg';

const Header = () => {

  let { name } = useParams();

  return(
    <Wrapper>
      <Button>
        <Link to="/" className="buttonLink">
          <div className="frame">
            <ArrowL/>
          </div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
        </Link>
      </Button>

      <Link to={`/pokemon/${name}`}>{name}</Link>

      <Button>
        <Link to="/" className="buttonLink">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""/>
          <div className="frame">
            <ArrowR/>
          </div>
        </Link>
      </Button>
    </Wrapper>
  )
};

export default Header;

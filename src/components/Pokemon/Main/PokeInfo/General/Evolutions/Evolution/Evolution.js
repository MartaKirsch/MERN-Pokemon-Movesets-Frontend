import { Link } from 'react-router-dom';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Evolutions/Evolution/Wrapper';
import { ReactComponent as Arrow } from 'imgs/evolution-arrow.svg';

const Evolution = () => {
  return(
    <Wrapper>
      <Link to="/pokemon/bulbasaur">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
      </Link>

      <div className="arrowBox">
        <Arrow/>
        <div className="text">Level 16</div>
      </div>

      <Link to="/pokemon/ivysaur">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
      </Link>

      <div className="arrowBox">
        <Arrow/>
        <div className="text">Level 32</div>
      </div>

      <Link to="/pokemon/venusaur">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""/>
      </Link>
    </Wrapper>
  )
};

export default Evolution;

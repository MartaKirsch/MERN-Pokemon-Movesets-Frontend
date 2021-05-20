import { Link } from 'react-router-dom';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Evolutions/Evolution/Wrapper';
import { ReactComponent as Arrow } from 'imgs/evolution-arrow.svg';

const Evolution = ({howManyStages, texts, ids}) => {
  return(
    <Wrapper>
      <Link to={`/pokemon/${ids[0]}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[0]}.png`} alt=""/>
      </Link>

      <div className="arrowBox">
        <Arrow/>
        <div className="text">{texts[0]}</div>
      </div>

      <Link to={`/pokemon/${ids[1]}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[1]}.png`} alt=""/>
      </Link>

      {howManyStages===2 &&
        <div className="arrowBox">
          <Arrow/>
          <div className="text">{texts[1]}</div>
        </div>
      }

      {howManyStages===2 &&
        <Link to={`/pokemon/${ids[2]}`}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[2]}.png`} alt=""/>
        </Link>
      }
    </Wrapper>
  )
};

export default Evolution;

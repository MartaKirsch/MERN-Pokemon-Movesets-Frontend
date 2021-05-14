import { Link } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/PokemonList/PokemonListItem/Wrapper';
import Info from 'components/Home/Sidebar/PokemonList/PokemonListItem/Info';
import Type from 'components/Home/Sidebar/PokemonList/PokemonListItem/Type';

const PokemonListItem = ({url,name,number,types}) => {
  return(
    <Wrapper>
      <Link to={`/pokemon/${name}`}>
        <img src={url} alt=""/>
        <Info>
          <div className="pokename">{`#${number} ${name}`}</div>
          <Type>
            {
              types.map(type => <div key={type} className={type}>{type}</div>)
            }
          </Type>
        </Info>
      </Link>
      <span className="line"></span>
    </Wrapper>
  )
};

export default PokemonListItem;

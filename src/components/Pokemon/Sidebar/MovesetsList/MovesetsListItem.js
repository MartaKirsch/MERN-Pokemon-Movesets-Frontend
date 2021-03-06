import { Link } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/PokemonList/PokemonListItem/Wrapper';
import Info from 'components/Home/Sidebar/PokemonList/PokemonListItem/Info';
import Buttons from 'components/Account/UserAccount/Sidebar/MovesetsList/Buttons';

const MovesetsListItem = ({url,pokemon,name,id}) => {
  return(
    <Wrapper>
      <Link to={`/moveset/${pokemon}/${id}`}>
        <img src={url} alt=""/>
        <Info>
          <div className="movesetName">{name}</div>
          <div className="pokename">
            {pokemon}
          </div>
        </Info>
        <div className="imgWrapper"></div>
      </Link>

      <span className="line"></span>
    </Wrapper>
  )
};


export default MovesetsListItem;

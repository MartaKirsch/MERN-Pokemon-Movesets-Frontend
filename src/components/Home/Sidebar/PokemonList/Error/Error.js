import Wrapper from 'components/Home/Sidebar/PokemonList/Error/Wrapper';
import {ReactComponent as Pokeballs} from 'imgs/error.svg';

const Error = ({display}) => {

  return(
    <Wrapper display={display}>
      <Pokeballs/>
    </Wrapper>
  )
};

export default Error;

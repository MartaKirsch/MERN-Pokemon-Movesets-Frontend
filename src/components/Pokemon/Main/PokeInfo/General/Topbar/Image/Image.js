import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Wrapper';
import Context from 'components/Pokemon/Context';

const Image = () => {

  const { pokemon } = useContext(Context);

  return(
    <Wrapper>
      <img src={pokemon.sprites.front_default} alt=""/>
    </Wrapper>
  )
};

export default Image;

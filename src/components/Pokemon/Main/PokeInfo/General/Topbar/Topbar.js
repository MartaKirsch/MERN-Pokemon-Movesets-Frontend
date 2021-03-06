import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Wrapper';
import Image from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Image';
import Types from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Types';
import OtherForms from 'components/Pokemon/Main/PokeInfo/General/Topbar/OtherForms/OtherForms';
import Context from 'components/Pokemon/Context';

const Topbar = () => {

  const {pokemon} = useContext(Context);

  return(
    <Wrapper>
      <Image pokemon={pokemon}/>
      <Types pokemon={pokemon}/>
      <OtherForms/>
    </Wrapper>
  )
};

export default Topbar;

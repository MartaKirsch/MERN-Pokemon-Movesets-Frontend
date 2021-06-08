import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Wrapper';
import Image from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Image';
import Types from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Types';
import Author from 'components/Moveset/Main/Topbar/Author';
import Context from 'components/Moveset/Context';


const Topbar = () => {
  const { pokemonData, moveset } = useContext(Context);

  return(
    <Wrapper>
      <Image pokemon={pokemonData}/>
      <Types pokemon={pokemonData}/>
      <Author moveset={moveset}/>
    </Wrapper>
  )
};

export default Topbar;

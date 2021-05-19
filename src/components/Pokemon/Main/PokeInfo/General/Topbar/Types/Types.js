import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Wrapper';
import Context from 'components/Pokemon/Context';

const Types = () => {
  const { pokemon } = useContext(Context);
  return(
    <Wrapper className="box">
      {
        pokemon.types.map(({type:{name}})=>
          <div className={`type ${name}`} key={name}>{name}</div>
        )
      }


    </Wrapper>
  )
};

export default Types;

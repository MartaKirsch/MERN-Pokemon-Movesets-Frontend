import { useContext } from 'react';
import Wrapper from 'components/Home/Main/TextField/Wrapper';
import General from 'components/Pokemon/Main/PokeInfo/General/General';
import Context from 'components/Pokemon/Context';

const PokeInfo = () => {

  const { isMoveset } = useContext(Context);

  return(
    <Wrapper>
      {!isMoveset && <General/>}
    </Wrapper>
  )
};


export default PokeInfo;

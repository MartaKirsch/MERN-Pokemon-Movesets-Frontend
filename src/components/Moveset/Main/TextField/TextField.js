import { useContext } from 'react';
import Context from 'components/Moveset/Context';
import Wrapper from 'components/Home/Main/TextField/Wrapper';
import Topbar from 'components/Moveset/Main/Topbar/Topbar';
import Panels from 'components/Moveset/Main/Panels/Panels';
import Description from 'components/Moveset/Main/Description/Description';

const TextField = () => {
  const { moveset } = useContext(Context);

  return(
    <Wrapper>
      <Topbar/>
      <Panels/>
      {moveset.description.length!==0 && <Description/>}
    </Wrapper>
  )
};

export default TextField;

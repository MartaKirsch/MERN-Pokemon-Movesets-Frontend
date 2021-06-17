import Wrapper from 'components/Moveset/Main/Description/Wrapper';
import { useContext } from 'react';
import Context from 'components/Moveset/Context';

const Description = () => {

  const { moveset } = useContext(Context);

  return(
    <Wrapper>
      <div className="label">Description</div>
      <div className="content">{moveset.description}</div>
    </Wrapper>
  )
};

export default Description;

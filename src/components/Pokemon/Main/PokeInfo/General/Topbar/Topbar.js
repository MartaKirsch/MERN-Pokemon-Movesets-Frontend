import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Wrapper';
import Image from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Image';
import Types from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Types';
import OtherForms from 'components/Pokemon/Main/PokeInfo/General/Topbar/OtherForms/OtherForms';

const Topbar = () => {
  return(
    <Wrapper>
      <Image/>
      <Types/>
      <OtherForms/>
    </Wrapper>
  )
};

export default Topbar;

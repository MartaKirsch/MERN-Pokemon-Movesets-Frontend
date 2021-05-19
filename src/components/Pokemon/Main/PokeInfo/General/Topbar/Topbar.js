import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Wrapper';
import Image from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Image';
import MainForms from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/MainForms';
import Types from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Types';
import OtherForms from 'components/Pokemon/Main/PokeInfo/General/Topbar/OtherForms/OtherForms';

const Topbar = () => {
  return(
    <Wrapper>
      <Image/>
      <MainForms/>
      <Types/>
      <OtherForms/>
    </Wrapper>
  )
};

export default Topbar;

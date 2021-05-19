import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Wrapper';
import Topbar from 'components/Pokemon/Main/PokeInfo/General/Topbar/Topbar';
import StatsBox from 'components/Pokemon/Main/PokeInfo/General/StatsBox/StatsBox';

const General = () => {
  return(
    <Wrapper>
      <Topbar/>
      <StatsBox/>
    </Wrapper>
  )
};

export default General;

import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Wrapper';
import Topbar from 'components/Pokemon/Main/PokeInfo/General/Topbar/Topbar';
import StatsBox from 'components/Pokemon/Main/PokeInfo/General/StatsBox/StatsBox';
import Evolutions from 'components/Pokemon/Main/PokeInfo/General/Evolutions/Evolutions';

const General = () => {
  return(
    <Wrapper>
      <Topbar/>
      <StatsBox/>
      <Evolutions/>
    </Wrapper>
  )
};

export default General;

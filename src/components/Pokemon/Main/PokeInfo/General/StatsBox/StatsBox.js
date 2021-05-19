import Wrapper from 'components/Pokemon/Main/PokeInfo/General/StatsBox/Wrapper';
import StatBar from 'components/Pokemon/Main/PokeInfo/General/StatsBox/StatBar/StatBar';

const StatsBox = () => {
  return(
    <Wrapper>
      <StatBar
      stat="HP"
      percent="50"
      value="40"
      min="230"
      max="324"
      />
      <StatBar
      stat="Attack"
      percent="65"
      value="63"
      min="230"
      max="324"
      />

      <StatBar
      stat="Defense"
      percent="65"
      value="63"
      min="230"
      max="324"
      />

      <StatBar
      stat="Sp. Atk"
      percent="65"
      value="63"
      min="230"
      max="324"
      />

      <StatBar
      stat="Sp. Def"
      percent="65"
      value="63"
      min="230"
      max="324"
      />

      <StatBar
      stat="Speed"
      percent="65"
      value="63"
      min="230"
      max="324"
      />

      <StatBar
      stat="Stat"
      percent="0"
      value="405"
      min="Min"
      max="Max"
      />
    </Wrapper>
  )
};

export default StatsBox;

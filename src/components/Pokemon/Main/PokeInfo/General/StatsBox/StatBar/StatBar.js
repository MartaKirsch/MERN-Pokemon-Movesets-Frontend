import Wrapper from 'components/Pokemon/Main/PokeInfo/General/StatsBox/StatBar/Wrapper';

const StatBar = ({stat,percent,value,min,max}) => {
  return(
    <Wrapper percent={percent}>
      <div className="stat">{stat}</div>
      <div className="value">{value}</div>
      <div className="bar-wrapper">
        <div className="bar"></div>
      </div>
      <div className="min">{min}</div>
      <div className="max">{max}</div>
    </Wrapper>
  )
};

export default StatBar;

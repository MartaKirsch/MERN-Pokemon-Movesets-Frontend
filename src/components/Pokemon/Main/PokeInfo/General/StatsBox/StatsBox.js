import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/StatsBox/Wrapper';
import StatBar from 'components/Pokemon/Main/PokeInfo/General/StatsBox/StatBar/StatBar';
import Context from 'components/Pokemon/Context';

const StatsBox = () => {
  let sum=0;

  const { pokemon } = useContext(Context);

  const stats = pokemon.stats.map((stat,i)=>{

    let min = Math.floor(((((2*stat.base_stat+0+(0/4)))+5)*0.9));
    let max = Math.floor(((((2*stat.base_stat+31+(252/4)))+5)*1.1));

    if(i===0)
    {
      min = Math.floor((((2*stat.base_stat+0+(0/4))))+110);
      max = Math.floor((((2*stat.base_stat+31+(252/4))))+110);
    }

    sum+=stat.base_stat;
    const names = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed"];

    return(
      <StatBar
      stat={names[i]}
      percent={stat.base_stat*100/255}
      value={stat.base_stat}
      min={min}
      max={max}
      key={names[i]}
      />
    )
  });

  return(
    <Wrapper>
      {stats}

      <StatBar
      stat="Stat"
      percent="0"
      value={sum}
      min="Min"
      max="Max"
      key="stat"
      />
    </Wrapper>
  )
};

export default StatsBox;

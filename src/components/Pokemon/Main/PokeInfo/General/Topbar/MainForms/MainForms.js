import { useContext, useState, useEffect } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';
import Context from 'components/Pokemon/Context';

const MainForms = () => {

  const [disabled, setDisabled] = useState([true, true]);

  //array
  const { selectedForm, setSelectedForm, numOfForms, species } = useContext(Context);

  useEffect(()=>{

    let arr = new Array(2).fill(true);

    species.varieties.forEach(({pokemon:{name}}, i) => {
      const alolanReg = /alola/;
      const galarianReg = /galar/;
      if(alolanReg.test(name))
        arr[0]=false;
      else if(galarianReg.test(name))
        arr[1]=false;
    });

    setDisabled(arr);

  },[species]);

  const handleClick = e => {
    let arr = new Array(numOfForms).fill(false);
    arr[e.target.dataset.num]=true;
    setSelectedForm(arr);
  };

  return(
    <Wrapper className="box" mainForms>
      <button
      key="regular"
      onClick={handleClick}
      data-num="0"
      className={selectedForm[0] ? "selected" : ""}
      >
      Regular</button>

      <button
      disabled={disabled[0]}
      key="alolan"
      onClick={handleClick}
      data-num="1"
      className={selectedForm[1] ? "selected" : ""}>
      Alolan</button>

      <button
      disabled={disabled[1]}
      key="galarian"
      onClick={handleClick}
      data-num="2"
      className={selectedForm[2] ? "selected" : ""}>
      Galarian</button>
    </Wrapper>
  )
};

export default MainForms;

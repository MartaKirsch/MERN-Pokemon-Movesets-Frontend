import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';
import Context from 'components/Pokemon/Context';

const OtherForms = () => {

  //array
  const { selectedForm, setSelectedForm, numOfForms,species } = useContext(Context);

  const handleClick = e => {
    let arr = new Array(numOfForms).fill(false);
    arr[e.target.dataset.num]=true;
    setSelectedForm(arr);
  };

  return(
    <Wrapper>
    <ul>
      {
        species.varieties.slice(1).filter(({pokemon:{name}})=>{
          const alolanReg = /alola/;
          const galarianReg = /galar/;

          return !alolanReg.test(name) && !galarianReg.test(name)
        }).map(({pokemon:{name}},i)=>
        <button
        key={name}
        onClick={handleClick}
        data-num={3+i}
        className={selectedForm[3+i] ? "selected" : ""}
        >{name}</button>
        )
      }


    </ul>
    </Wrapper>
  )
};

export default OtherForms;

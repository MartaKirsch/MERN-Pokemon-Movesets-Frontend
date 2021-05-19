import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';
import Context from 'components/Pokemon/Context';

const OtherForms = () => {

  // selectedForm - array
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
        species.varieties.map(({pokemon:{name}},i)=>
        <button
        key={name}
        onClick={handleClick}
        data-num={i}
        className={selectedForm[i] ? "selected" : ""}
        >{name}</button>
        )
      }


    </ul>
    </Wrapper>
  )
};

export default OtherForms;

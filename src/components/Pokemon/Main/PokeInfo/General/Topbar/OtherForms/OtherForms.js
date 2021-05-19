import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';
import Context from 'components/Pokemon/Context';

const OtherForms = () => {

  //array
  const { selectedForm, setSelectedForm, numOfForms } = useContext(Context);

  const handleClick = e => {
    let arr = new Array(numOfForms).fill(0);
    arr[e.target.dataset.num]=1;
    setSelectedForm(arr);
  };

  return(
    <Wrapper>
    <ul>
      <button
      key="mega-venusaur"
      onClick={handleClick}
      data-num="3"
      className={selectedForm[3] ? "selected" : ""}
      >
      Mega Venusaur</button>

      <button
      key="venusaur-gmax"
      onClick={handleClick}
      data-num="4"
      className={selectedForm[4] ? "selected" : ""}
      >
      Venusaur Gmax</button>

    </ul>
    </Wrapper>
  )
};

export default OtherForms;

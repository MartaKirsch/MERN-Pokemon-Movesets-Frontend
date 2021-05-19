import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';
import Context from 'components/Pokemon/Context';

const MainForms = () => {

  //array
  const { selectedForm, setSelectedForm, numOfForms } = useContext(Context);

  const handleClick = e => {
    let arr = new Array(numOfForms).fill(0);
    arr[e.target.dataset.num]=1;
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
      disabled={false}
      key="alolan"
      onClick={handleClick}
      data-num="1"
      className={selectedForm[1] ? "selected" : ""}>
      Alolan</button>

      <button
      disabled={false}
      key="galarian"
      onClick={handleClick}
      data-num="2"
      className={selectedForm[2] ? "selected" : ""}>
      Galarian</button>
    </Wrapper>
  )
};

export default MainForms;

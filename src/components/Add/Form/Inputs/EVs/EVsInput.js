import { useContext } from 'react';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/EVs/InputWrapper';
import Button from 'components/Add/Form/Inputs/EVs/Button';

const EVsInput = ({first, index}) => {

  const {selectErrors, setSelectErrors, numErrors, setNumErrors} = useContext(EVsContext);
  const { stats, setStats } = useContext(FormContext);

  //delete item
  const handleClick = e => {
    e.preventDefault();

    let arr = [...stats];
    let arrS = [...selectErrors];
    let arrN = [...numErrors];

    let arrFiltered = arr.filter((item,i)=>i!==index);
    let selectErrsFiltered = arrS.filter((item,i)=>i!==index);
    let numErrsFiltered = arrN.filter((item,i)=>i!==index);

    setStats(arrFiltered);
    setSelectErrors(selectErrsFiltered);
    setNumErrors(numErrsFiltered);

  };

  //change selected option
  const handleSelectChange = e => {
    //set new stat name
    let arr = [...stats];
    arr[index].name = e.target.value;
    setStats(arr);
  };

  //type in number
  const handleInputChange = e => {
    const val = e.target.value;

    let arr = [...stats];
    arr[index].num = val;
    setStats(arr);

    let arr2 = [...numErrors];
    if(val<=0 || val>252 || isNaN(parseInt(val)) )
      arr2[index]=true;

    else
      arr2[index]=false;

    setNumErrors(arr2);
  };


  return(
    <Wrapper>
      <select
      className={selectErrors[index] ? "err" : ""}
      value={stats[index].name}
      onChange={handleSelectChange}
      >
        <option value="HP">HP</option>
        <option value="Atk">Atk</option>
        <option value="Def">Def</option>
        <option value="SpAtk">SpAtk</option>
        <option value="SpDef">SpDef</option>
        <option value="Speed">Speed</option>
      </select>
      <span className="textWrapper">
        <input
        type="text"
        placeholder="Enter Num"
        value={stats[index].num}
        onChange={handleInputChange}
        required
        />
        <span className={!numErrors[index] ? "line" : "line red"}></span>
      </span>
      <Button deleteBtn disabled={first} onClick={handleClick}>-</Button>
    </Wrapper>
  )
};

export default EVsInput;

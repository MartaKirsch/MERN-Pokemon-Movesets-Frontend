import { useContext, useEffect, useState } from 'react';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';
import Wrapper from 'components/Add/Form/Inputs/EVs/InputWrapper';

const EVsInput = ({first}) => {

  const [isValid, setIsValid] = useState(1);
  const {} = useContext(EVsContext);

  useEffect(()=>{

  },[]);

  const handleClick = e => {
    e.preventDefault();
  }

  return(
    <Wrapper>
      <select name="" id="">
        <option value="HP">HP</option>
        <option value="Atk">Atk</option>
        <option value="Def">Def</option>
      </select>
      <span className="textWrapper">
        <input
        type="text"
        placeholder="Enter Num"
        required
        />
        <span className={isValid===1 ? "line" : "line red"}></span>
      </span>
      <button disabled={first} onClick={e=>handleClick(e)}>-</button>
    </Wrapper>
  )
};

export default EVsInput;

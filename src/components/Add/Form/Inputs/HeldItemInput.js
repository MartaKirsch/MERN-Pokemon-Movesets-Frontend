import { useContext, useEffect, useRef, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';

const HeldItemInput = () => {

  const { heldItem, setHeldItem, errors, setErrors } = useContext(FormContext);
  const ref = useRef(null);
  const { isVisible, setIsVisible } = useHideHints(ref);
  const [isValid, setIsValid] = useState(1);

  useEffect(()=>{
    let arr = [...errors];

    if(isValid===0)
      arr[1]=1;
    else
      arr[1]=0;

    setErrors(arr);
  },[isValid]);

  return(
    <Wrapper ref={ref}>
      <label htmlFor="heldItem">Held Item</label>
      <input
      type="text"
      name="heldItem"
      id="heldItem"
      placeholder="Enter Held Item name"
      value={heldItem}
      onChange={e=>setHeldItem(e.target.value)}
      onFocus={e=>setIsVisible(!isVisible)}
      />
      <span className={isValid===1 ? "line" : "line red"}></span>
      <HintsList
      display={isVisible.toString()}
      setter={setHeldItem}
      url="/pokemon/allHeldItems"
      input={heldItem}
      validitySetter={setIsValid}
      />
    </Wrapper>
  )
};

export default HeldItemInput;

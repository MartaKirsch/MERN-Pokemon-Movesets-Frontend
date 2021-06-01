import { useContext, useEffect, useRef, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';

const NatureInput = () => {

  const { nature, setNature, errors, setErrors } = useContext(FormContext);
  const ref = useRef(null);
  const { isVisible, setIsVisible } = useHideHints(ref);
  const [isValid, setIsValid] = useState(1);

  useEffect(()=>{
    let arr = [...errors];

    if(isValid===0)
      arr[3]=1;
    else
      arr[3]=0;

    setErrors(arr);
  },[isValid]);

  return(
    <Wrapper ref={ref}>
      <label htmlFor="nature">Nature</label>
      <input
      type="text"
      name="nature"
      placeholder="Enter Nature"
      value={nature}
      onChange={e=>setNature(e.target.value)}
      onFocus={e=>setIsVisible(!isVisible)}
      required
      />
      <span className={isValid===1 ? "line" : "line red"}></span>
      <HintsList
      display={isVisible.toString()}
      setter={setNature}
      url="/pokemon/allNatures"
      input={nature}
      validitySetter={setIsValid}
      />
    </Wrapper>
  )
};

export default NatureInput;

import { useContext, useEffect, useRef, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';

const AbilityInput = () => {

  const { ability, setAbility, errors, setErrors, pokemon } = useContext(FormContext);
  const ref = useRef(null);
  const { isVisible, setIsVisible } = useHideHints(ref);
  const [isValid, setIsValid] = useState(1);

  useEffect(()=>{

    let arr = [...errors];

    if(isValid===0)
      arr[2]=1;
    else
      arr[2]=0;

    setErrors(arr);
  },[isValid]);

  return(
    <Wrapper ref={ref}>
      <label htmlFor="ability">Ability</label>
      <input
      type="text"
      name="ability"
      id="ability"
      placeholder="Enter Ability name"
      value={ability}
      onChange={e=>setAbility(e.target.value)}
      onFocus={e=>setIsVisible(!isVisible)}
      required
      />
      <span className={isValid===1 ? "line" : "line red"}></span>
      { (errors[0]===0 && pokemon!=="") && <HintsList
      display={isVisible.toString()}
      setter={setAbility}
      url={`/pokemon/abilities/${pokemon}`}
      input={ability}
      validitySetter={setIsValid}
      />}
    </Wrapper>
  )
};

export default AbilityInput;

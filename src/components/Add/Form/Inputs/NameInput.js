import { useContext, useEffect, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import useCheck from 'hooks/useCheck';

const NameInput = () => {

  const { name, setName, errors, setErrors, pokemon } = useContext(FormContext);

  const [lengthValid, setLengthValid] = useState(true);

  const { isOK: isValid } = useCheck(`/moveset/exists/${name}/${pokemon}`);

  useEffect(()=>{
    let arr = [...errors];

    if(!isValid || !lengthValid)
      arr[6]=1;
    else
      arr[6]=0;
    
    setErrors(arr);
  },[isValid, lengthValid]);

  useEffect(()=>
  {
    if(name.length>20)
      setLengthValid(false);
    else
      setLengthValid(true);
  },[name]);

  return(
    <Wrapper>
      <label htmlFor="moveset_name">Moveset Name</label>
      <input
      type="text"
      name="moveset_name"
      placeholder="Enter Your Moveset's Name"
      value={name}
      onChange={e=>setName(e.target.value)}
      required
      />
      <span className={(isValid && lengthValid) ? "line" : "line red"}></span>
    </Wrapper>
  )
};

export default NameInput;

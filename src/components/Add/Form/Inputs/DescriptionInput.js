import { useContext, useEffect } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';

const DescriptionInput = () => {

  const { description, setDescription, errors, setErrors } = useContext(FormContext);

  useEffect(()=>{
    let arr = [...errors];

    if(description.length<=1200)
      arr[7]=0;
    else
      arr[7]=1;

    setErrors(arr);
  },[description]);

  return(
    <Wrapper>
      <label htmlFor="description">Description</label>
      <textarea
      type="text"
      name="description"
      id="description"
      placeholder="Enter Your Moveset's Description"
      value={description}
      onChange={e=>setDescription(e.target.value)}
      >
      </textarea>
      <span className={errors[7]===0 ? "line" : "line red"}></span>
    </Wrapper>
  )
};

export default DescriptionInput;

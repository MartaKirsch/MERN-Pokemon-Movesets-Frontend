import { useState, useEffect, useContext } from 'react';
import Wrapper from 'components/Add/Form/Inputs/EVs/Wrapper';
import MovesItem from 'components/Add/Form/Inputs/Moves/MovesItem';
import FormContext from 'components/Add/Form/FormContext';
import Button from 'components/Add/Form/Inputs/EVs/Button';
import MovesContext from 'components/Add/Form/Inputs/Moves/MovesContext';

const Moves = () => {

  const [errors, setErrors] = useState([false]);

  const { errors: formErrors, setErrors: setFormErrors, moves, setMoves } = useContext(FormContext);

  const values = {moves, setMoves, errors, setErrors};

  useEffect(()=>{
    const sum = errors.reduce((a, b) => a + b, 0);
    const error = sum===0 ? 0 : 1;

    let arr = [...formErrors];
    arr[5] = error;
    setFormErrors(arr);
  },[errors]);

  //add item
  const handleClick = e => {
    e.preventDefault();

    let arr = [...moves];
    arr.push("");
    setMoves(arr);

    let errArr = [...errors];
    errArr.push(false);
    setErrors(errArr);
  }


  return(
    <Wrapper>
      <label>Moves</label>
      <MovesContext.Provider value={values}>
        {
          moves.map((item,i)=>{
            return <MovesItem first={moves.length===1} index={i} key={i}/>
          })
        }
        <Button disabled={moves.length===4} onClick={handleClick}>+</Button>
      </MovesContext.Provider>
    </Wrapper>
  )
};

export default Moves;

import { useContext, useEffect, useRef, useState } from 'react';
import MovesContext from 'components/Add/Form/Inputs/Moves/MovesContext';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Moves/ItemWrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';
import Button from 'components/Add/Form/Inputs/EVs/Button';
import useHideHints from 'hooks/useHideHints';

const MovesItem = ({index, first}) => {

  const { moves, setMoves, errors, setErrors } = useContext(MovesContext);
  const { errors: formErrors, pokemon } = useContext(FormContext);
  const ref = useRef(null);
  const { isVisible, setIsVisible } = useHideHints(ref);
  const [isValid, setIsValid] = useState(1);

  const [move, setMove] = useState("");

  useEffect(()=>{
    let arr = [...errors];

    if(isValid===0)
      arr[index]=1;
    else
      arr[index]=0;

    setErrors(arr);
  },[isValid]);

  //update global arr of moves
  useEffect(()=>{
    let arr = [...moves];
    arr[index] = move;
    setMoves(arr);
  },[move]);

  //delete item
  const handleClick = e => {
    e.preventDefault();

    let arr = [...moves];
    let err = [...errors];

    let arrFiltered = arr.filter((item,i)=>i!==index);
    let errsFiltered = err.filter((item,i)=>i!==index);

    setMoves(arrFiltered);
    setErrors(errsFiltered);

  };

  return(
    <Wrapper ref={ref}>
      <span className="wrapper">
        <input
        type="text"
        placeholder="Enter Move"
        value={moves[index]}
        onChange={e=>setMove(e.target.value)}
        onFocus={e=>setIsVisible(!isVisible)}
        required
        />
        <span className={isValid===1 ? "line" : "line red"}></span>
        { (formErrors[0]===0 && pokemon!=="") && <HintsList
        display={isVisible.toString()}
        setter={setMove}
        url={`/pokemon/allMoves/${pokemon}`}
        input={move}
        validitySetter={setIsValid}
        />}
      </span>


      <Button deleteBtn disabled={first} onClick={handleClick}>-</Button>
    </Wrapper>
  )
};

export default MovesItem;

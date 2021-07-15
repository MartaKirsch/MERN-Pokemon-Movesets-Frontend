import { useContext, useEffect, useRef, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';

const PokemonInput = () => {

  const { pokemon, setPokemon, errors, setErrors } = useContext(FormContext);

  const ref = useRef(null);
  const { isVisible, setIsVisible } = useHideHints(ref);

  const [isValid, setIsValid] = useState(1);

  //for change in pokemon - check if the name is valid
  useEffect(()=>{
    let arr = [...errors];

    if(isValid===0)
      arr[0]=1;
    else
      arr[0]=0;

    setErrors(arr);
  },[isValid]);

  return(
    <Wrapper ref={ref}>
      <label htmlFor="pokemon">Pokemon</label>
      <input
      type="text"
      name="pokemon"
      id="pokemon"
      placeholder="Enter Pokemon name"
      value={pokemon}
      onChange={e=>setPokemon(e.target.value)}
      onFocus={e=>setIsVisible(!isVisible)}
      required
      />
      <span className={isValid===1 ? "line" : "line red"}></span>
      <HintsList
      display={isVisible.toString()}
      setter={setPokemon}
      url="/pokemon/allPokemonNames"
      input={pokemon}
      validitySetter={setIsValid}
      />
    </Wrapper>
  )
};

export default PokemonInput;

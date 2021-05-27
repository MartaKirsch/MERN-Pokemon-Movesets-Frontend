import { useContext, useEffect, useRef, useState } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Inputs/Wrapper';
import HintsList from 'components/Add/Form/HintsList/HintsList';

const PokemonInput = () => {

  const { pokemon, setPokemon } = useContext(FormContext);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  //add event for showing/hiding hints
  useEffect(()=>{
    window.addEventListener('click',checkClicked);

    return () => {
      window.removeEventListener('click',checkClicked);
    }
  },[]);

  const checkClicked = e => {
    if(!ref.current)
      return;

    if(e.target !== ref.current.querySelector('input') && e.target.parentNode !== ref.current)
    {
      setIsVisible(false);
    }
  }

  //for change in pokemon - check
  useEffect(()=>{
    console.log(pokemon);
  },[pokemon]);

  return(
    <Wrapper ref={ref}>
      <label htmlFor="pokemon">Pokemon</label>
      <input
      type="text"
      name="pokemon"
      placeholder="Enter Pokemon name"
      value={pokemon}
      onChange={e=>setPokemon(e.target.value)}
      onFocus={e=>setIsVisible(!isVisible)}
      />
      <span className="line"></span>
      <HintsList
      display={isVisible.toString()}
      setter={setPokemon}
      url="/pokemon/allPokemonNames"
      input={pokemon}
      />
    </Wrapper>
  )
};

export default PokemonInput;

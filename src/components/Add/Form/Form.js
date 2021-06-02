import { useState, useContext } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Wrapper';
import PokemonInput from 'components/Add/Form/Inputs/PokemonInput';
import HeldItemInput from 'components/Add/Form/Inputs/HeldItemInput';
import AbilityInput from 'components/Add/Form/Inputs/AbilityInput';
import NatureInput from 'components/Add/Form/Inputs/NatureInput';
import EVs from 'components/Add/Form/Inputs/EVs/EVs';
import Moves from 'components/Add/Form/Inputs/Moves/Moves';

const Form = () => {

  //form data
  const [pokemon, setPokemon] = useState("");
  const [heldItem, setHeldItem] = useState("");
  const [ability, setAbility] = useState("");
  const [nature, setNature] = useState("");
  const [errors, setErrors] = useState([0, 0, 0, 0, 0, 0]);

  const values = {pokemon, setPokemon,errors, setErrors, heldItem, setHeldItem, ability, setAbility, nature, setNature};

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    console.log(errors);
  }

  return(
    <Wrapper onSubmit={handleSubmit} autocomplete="off">
      <FormContext.Provider value={values}>
        <PokemonInput/>
        <HeldItemInput/>
        <AbilityInput/>
        <NatureInput/>
        <EVs/>
        <Moves/>
        <button>Add Moveset</button>
      </FormContext.Provider>
    </Wrapper>
  )
};

export default Form;

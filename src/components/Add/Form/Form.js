import { useState, useContext } from 'react';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Wrapper';
import PokemonInput from 'components/Add/Form/Inputs/PokemonInput';

const Form = () => {

  const [pokemon, setPokemon] = useState("");

  const values = { pokemon, setPokemon };

  return(
    <Wrapper>
      <FormContext.Provider value={values}>
        <PokemonInput/>
      </FormContext.Provider>
    </Wrapper>
  )
};

export default Form;

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import FormContext from 'components/Add/Form/FormContext';
import Wrapper from 'components/Add/Form/Wrapper';
import PokemonInput from 'components/Add/Form/Inputs/PokemonInput';
import HeldItemInput from 'components/Add/Form/Inputs/HeldItemInput';
import AbilityInput from 'components/Add/Form/Inputs/AbilityInput';
import NatureInput from 'components/Add/Form/Inputs/NatureInput';
import EVs from 'components/Add/Form/Inputs/EVs/EVs';
import Moves from 'components/Add/Form/Inputs/Moves/Moves';
import NameInput from 'components/Add/Form/Inputs/NameInput';
import DescriptionInput from 'components/Add/Form/Inputs/DescriptionInput';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import LoadMoreButton from 'components/Home/Sidebar/PokemonList/LoadMoreButton';

const Form = () => {

  let history = useHistory();

  //form data
  const [pokemon, setPokemon] = useState("");
  const [heldItem, setHeldItem] = useState("");
  const [ability, setAbility] = useState("");
  const [nature, setNature] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [moves, setMoves] = useState([""]);
  const [stats, setStats] = useState([{name:"HP", num:""}]);
  const [errors, setErrors] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  //post query status
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  //button
  const [disabled, setDisabled] = useState(false);

  //values for Context
  const values = {pokemon, setPokemon,errors, setErrors, heldItem, setHeldItem, ability, setAbility, nature, setNature, name, setName, description, setDescription, stats, setStats, moves, setMoves};

  const handleSubmit = e => {
    e.preventDefault();

    let arr = [...errors];
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log(errors);
    //if any errors - return
    if(sum!==0)
      return;

    //if no errors, add new moveset
    setIsPending(true);
    setIsError(false);

    const data = {
      pokemon,
      heldItem,
      ability,
      nature,
      name,
      description,
      evs:stats,
      moves
    };

    axios.post('/moveset', data)
    .then(res=>{
      if(res.statusText!=="OK")
        throw new Error('error happened!');

      if(res.data.saved)
        history.push('/account');
      else
      {
        setIsError(true);
        setIsPending(false);
      }
    })
    .catch(err=>{
      setIsError(true);
      setIsPending(false);
    });
  }

  useEffect(()=>{
    //if any errors - disable the button
    let arr = [...errors];
    const sum = arr.reduce((a, b) => a + b, 0);
    if(sum===0)
      setDisabled(false);
    else
      setDisabled(true);
  },[errors]);

  return(
    <Wrapper onSubmit={handleSubmit} autocomplete="off">
      {(!isPending && !isError) && <FormContext.Provider value={values}>
        <PokemonInput/>
        <HeldItemInput/>
        <AbilityInput/>
        <NatureInput/>
        <EVs/>
        <Moves/>
        <NameInput/>
        <DescriptionInput/>
        <LoadMoreButton type="submit" disabled={disabled} isForm="true">Add Moveset</LoadMoreButton>
      </FormContext.Provider>}
      {(!isPending && isError) && <Error display="true"/>}
      {(isPending && !isError) && <Loading display="true"/>}
    </Wrapper>
  )
};

export default Form;

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

const Form = ({pok, item, ab, nat, nm, desc, movs, evs, isUpdate, id}) => {

  let history = useHistory();

  //form data
  const [pokemon, setPokemon] = useState(pok);
  const [heldItem, setHeldItem] = useState(item);
  const [ability, setAbility] = useState(ab);
  const [nature, setNature] = useState(nat);
  const [name, setName] = useState(nm);
  const [description, setDescription] = useState(desc);
  const [moves, setMoves] = useState(movs);
  const [stats, setStats] = useState(evs);
  const [errors, setErrors] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [firstChange, setFirstChange] = useState(isUpdate);

  //post query status
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  //button
  const [disabled, setDisabled] = useState(false);

  //values for Context
  const values = {pokemon, setPokemon,errors, setErrors, heldItem, setHeldItem, ability, setAbility, nature, setNature, name, setName, description, setDescription, stats, setStats, moves, setMoves, isUpdate, id};

  const handleSubmit = e => {
    e.preventDefault();

    let arr = [...errors];
    const sum = arr.reduce((a, b) => a + b, 0);

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

    if(!isUpdate)
    {
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

    else
    {
      axios.put(`/moveset/${id}`, data)
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

  //on change of pokemon - reset other data
  useEffect(()=>{
    if(firstChange)
    {
      setFirstChange(false);
    }
    else
    {
      setHeldItem("");
      setAbility("");
      setNature("");
      setName("");
      setDescription("");
      setMoves([""]);
      setStats([{name:"HP", num:""}]);
      setErrors([0, 0, 0, 0, 0, 0, 0, 0]);
    }
  },[pokemon]);

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
        <LoadMoreButton type="submit" disabled={disabled} isForm="true">{!isUpdate?"Add Moveset" : "Update Moveset"}</LoadMoreButton>
      </FormContext.Provider>}
      {(!isPending && isError) && <Error display="true"/>}
      {(isPending && !isError) && <Loading display="true"/>}
    </Wrapper>
  )
};

Form.defaultProps = {
  pok: "",
  item: "",
  ab: "",
  nat: "",
  nm: "",
  movs: [""],
  desc:"",
  evs: [{name:"HP", num:""}],
  isUpdate: false,
  id:""
};

export default Form;

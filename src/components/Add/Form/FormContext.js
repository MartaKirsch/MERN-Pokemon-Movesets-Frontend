import React from 'react';

const FormContext = React.createContext({
  pokemon: "",
  setPokemon: ()=>{},
  errors: [],
  setErrors: ()=>{},
  ability: "",
  setAbility: ()=>{},
  nature: "",
  setNature: ()=>{}
});

export default FormContext;

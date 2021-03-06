import React from 'react';

const FormContext = React.createContext({
  pokemon: "",
  setPokemon: ()=>{},
  errors: [],
  setErrors: ()=>{},
  ability: "",
  setAbility: ()=>{},
  nature: "",
  setNature: ()=>{},
  name: "",
  setName: ()=>{},
  description: "",
  setDescription: ()=>{},
  stats: "",
  setStats: ()=>{},
  moves: "",
  setMoves: ()=>{},
  isUpdate:false,
  id:""
});

export default FormContext;

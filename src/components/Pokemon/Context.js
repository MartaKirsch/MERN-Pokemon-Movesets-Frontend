import React from 'react';

const Context = React.createContext({
  isMoveset:false,
  setIsMoveset: ()=>{},
  selectedForm:[],
  setSelectedForm: ()=>{},
  numOfForms:[],
  setNumOfForms: ()=>{},
  pokemon:{},
  setPokemon: ()=>{},
  species:{},
  setSpecies: ()=>{},
  evolution:{},
  setEvolution: ()=>{}
});

export default Context;

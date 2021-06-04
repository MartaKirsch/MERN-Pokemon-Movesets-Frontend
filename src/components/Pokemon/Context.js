import React from 'react';

const Context = React.createContext({
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
  setEvolution: ()=>{},
  urls:[]
});

export default Context;

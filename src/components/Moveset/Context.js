import React from 'react';

const Context = React.createContext({
  moveset:{},
  setMoveset:()=>{},
  pokemonData:{},
  setPokemonData:()=>{},
  species:{},
  setSpecies:()=>{}
});

export default Context;

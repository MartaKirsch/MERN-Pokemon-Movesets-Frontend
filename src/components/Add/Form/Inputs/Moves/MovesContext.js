import React from 'react';

const MovesContext = React.createContext({
  moves:[],
  setMoves: ()=>{},
  errors:[],
  setErrors:()=>{}
});

export default MovesContext;

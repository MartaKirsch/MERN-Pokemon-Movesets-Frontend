import React from 'react';

const MovesContext = React.createContext({
  errors:[],
  setErrors:()=>{}
});

export default MovesContext;

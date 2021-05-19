import React from 'react';

const Context = React.createContext({
  isMoveset:false,
  setIsMoveset: ()=>{},
  selectedForm:[],
  setSelectedForm: ()=>{},
  numOfForms:[],
  setNumOfForms: ()=>{},
});

export default Context;

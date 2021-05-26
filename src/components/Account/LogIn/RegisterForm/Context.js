import React from 'react';

const Context = React.createContext({
  login:"",
  setLogin:()=>{},
  email:"",
  setEmail:()=>{},
  passwd:"",
  setPasswd:()=>{},
  errors:"",
  setErrors:()=>{},
  inits:"",
  setInits:()=>{}
});

export default Context;

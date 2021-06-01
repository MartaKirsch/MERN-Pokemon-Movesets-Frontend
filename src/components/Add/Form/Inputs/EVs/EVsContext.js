import React from 'react';

const EVsContext = React.createContext({
  stats:[],
  setStats: ()=>{},
  selectErrors:[],
  setSelectErrors:()=>{},
  numErrors:[],
  setNumErrors:()=>{}
});

export default EVsContext;

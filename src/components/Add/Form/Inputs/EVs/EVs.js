import { useState, useEffect } from 'react';
import Wrapper from 'components/Add/Form/Inputs/EVs/Wrapper';
import EVsInput from 'components/Add/Form/Inputs/EVs/EVsInput';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';
import Button from 'components/Add/Form/Inputs/EVs/Button';

const EVs = () => {

  const [stats, setStats] = useState([{name:"HP", num:""}]);
  const [selectErrors, setSelectErrors] = useState([false]);
  const [numErrors, setNumErrors] = useState([false]);

  const values = {stats, setStats,selectErrors, setSelectErrors, numErrors, setNumErrors};

  useEffect(()=>{
    //reset error in select errors array
    let errorsArr = new Array(selectErrors.length).fill(false);

    //check if there are any with same name
    let vals = [];
    let arr = [...stats];
    arr.forEach((item, i) => {
      //new value
      if(vals.indexOf(item.name)===-1)
      {
        vals.push(item.name);
      }
      //already here
      else
      {
        errorsArr[i]=true;
        errorsArr[vals.indexOf(item.name)]=true;
      }
    });
    setSelectErrors(errorsArr);
  },[stats]);

  const handleClick = e => {
    e.preventDefault();

    let arr = [...stats];
    arr.push({name:"HP",num:""});
    setStats(arr);

    let selectErrArr = [...selectErrors];
    selectErrArr.push(false);
    setSelectErrors(selectErrArr);
  }


  return(
    <Wrapper>
      <label>EVs</label>
      <EVsContext.Provider value={values}>
        {
          stats.map((item,i)=>{
            return <EVsInput first={stats.length===1} index={i} key={i}/>
          })
        }
        <Button disabled={stats.length===6} onClick={e=>handleClick(e)}>+</Button>
      </EVsContext.Provider>
    </Wrapper>
  )
};

export default EVs;

import { useState, useEffect, useContext } from 'react';
import Wrapper from 'components/Add/Form/Inputs/EVs/Wrapper';
import EVsInput from 'components/Add/Form/Inputs/EVs/EVsInput';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';
import Button from 'components/Add/Form/Inputs/EVs/Button';
import FormContext from 'components/Add/Form/FormContext';

const EVs = () => {

  const [selectErrors, setSelectErrors] = useState([false]);
  const [numErrors, setNumErrors] = useState([false]);

  const { errors: formErrors, setErrors: setFormErrors, stats, setStats } = useContext(FormContext);

  const values = {selectErrors, setSelectErrors, numErrors, setNumErrors};

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

  //update global err array
  useEffect(()=>{
    let arr = selectErrors.concat(numErrors);

    const sum = arr.reduce((a, b) => a + b, 0);
    let error = sum===0 ? 0 : 1;

    //check if overall sum of evs is <=508
    if(sum===0)
    {
      const evsArr = [...stats];
      let evsSum = 0;
      evsArr.forEach(item => {
        evsSum+=parseInt(item.num);
      });

      if(evsSum>508)
        error=1;
    }

    arr = [...formErrors];
    arr[4] = error;
    setFormErrors(arr);
  },[selectErrors,numErrors]);

  //add item
  const handleClick = e => {
    e.preventDefault();

    let arr = [...stats];
    arr.push({name:"HP",num:""});
    setStats(arr);

    let selectErrArr = [...selectErrors];
    selectErrArr.push(false);
    setSelectErrors(selectErrArr);

    let numErrArr = [...numErrors];
    numErrArr.push(false);
    setNumErrors(numErrArr);
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

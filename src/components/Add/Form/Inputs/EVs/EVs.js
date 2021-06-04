import { useState, useEffect, useContext } from 'react';
import Wrapper from 'components/Add/Form/Inputs/EVs/Wrapper';
import EVsInput from 'components/Add/Form/Inputs/EVs/EVsInput';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';
import Button from 'components/Add/Form/Inputs/EVs/Button';
import FormContext from 'components/Add/Form/FormContext';

const EVs = () => {

  const [selectErrors, setSelectErrors] = useState([false]);
  const [numErrors, setNumErrors] = useState([false]);
  const [isSumErr, setIsSumErr] = useState(false);

  const { errors: formErrors, setErrors: setFormErrors, stats, setStats, pokemon } = useContext(FormContext);

  const values = {selectErrors, setSelectErrors, numErrors, setNumErrors};

  //on stats change (look for select errors)
  useEffect(()=>{
    //reset sum of evs error
    setIsSumErr(false);

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

    //check if overall sum of evs is <=510

    let evsSum = 0;
    arr.forEach(item => {
      evsSum+=parseInt(item.num);
    });

    if(evsSum>510)
    {
      arr = [...formErrors];
      arr[4] = 1;
      setFormErrors(arr);

      setIsSumErr(true);
    }
  },[stats]);

  //update global err array (form) on self errors change
  useEffect(()=>{
    let arr = selectErrors.concat(numErrors);

    const sum = arr.reduce((a, b) => a + b, 0);
    let error = sum===0 ? 0 : 1;

    let evsSum = 0;
    let arr2 = [...stats];
    arr2.forEach(item => {
      evsSum+=parseInt(item.num);
    });

    if(evsSum>510)
    {
      error = 1;
      setIsSumErr(true);
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

  //on pokemon change reset errors arr
  useEffect(()=>{
    setSelectErrors([false]);
    setNumErrors([false]);
  },[pokemon]);

  return(
    <Wrapper>
      <label className={isSumErr ? "sumErr" : ""}>EVs</label>
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

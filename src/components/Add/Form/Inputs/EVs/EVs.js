import { useState } from 'react';
import Wrapper from 'components/Add/Form/Inputs/EVs/Wrapper';
import EVsInput from 'components/Add/Form/Inputs/EVs/EVsInput';
import EVsContext from 'components/Add/Form/Inputs/EVs/EVsContext';

const EVs = () => {

  const[stats, setStats] = useState([{name:"", num:""}]);

  const values = {stats, setStats};

  return(
    <Wrapper>
      <label>EVs</label>
      <EVsContext.Provider value={values}>
        {
          stats.map((item,i)=>{
            if(i===0)
              return <EVsInput first={true}/>;
            else
              return <EVsInput first={false}/>
          })
        }
      </EVsContext.Provider>
    </Wrapper>
  )
};

export default EVs;

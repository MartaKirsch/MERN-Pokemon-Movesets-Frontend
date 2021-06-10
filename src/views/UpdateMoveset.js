import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCheck from 'hooks/useCheck';
import Wrapper from 'components/Home/Wrapper';
import Form from 'components/Add/Form/Form';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const UpdateMoveset = () => {

  let history = useHistory();
  const { id } = useParams();

  //hook for checking - if user is logged in
  const { isOK: isLoggedIn, isPending, isError, additional: moveset } = useCheck(`/moveset/checkForUpdate/${id}`);

  useEffect(()=>{
    if(!isPending && !isError && !isLoggedIn)
    {
      history.push('/account');
    }
  },[isPending]);

  return(
    <Wrapper>
      {(isLoggedIn && moveset) && <Form
        isUpdate={true}
        pok={moveset.pokemon}
        ab={moveset.ability}
        nm={moveset.name}
        nat={moveset.nature}
        desc={moveset.description}
        movs={moveset.moves}
        evs={moveset.evs}
        item={moveset.heldItem}
        id={id}
        />}
      {(!isPending && isError) && <Error display="true"/>}
      {(isPending && !isError) && <Loading display="true"/>}

    </Wrapper>
  )
};

export default UpdateMoveset;

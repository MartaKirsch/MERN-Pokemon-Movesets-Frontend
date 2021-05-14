import { useHistory } from "react-router-dom";
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';

const MainForms = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/pokemon/ivysaur');
  };

  return(
    <Wrapper className="box">
      <button
      key="regular"
      onClick={handleClick}>
      Regular</button>

      <button
      disabled={true}
      key="alolan"
      onClick={handleClick}>
      Alolan</button>

      <button
      disabled={true}
      key="galarian"
      onClick={handleClick}>
      Galarian</button>
    </Wrapper>
  )
};

export default MainForms;

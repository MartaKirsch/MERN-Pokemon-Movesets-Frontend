import { useHistory } from "react-router-dom";
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/MainForms/Wrapper';

const OtherForms = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/pokemon/ivysaur');
  };

  return(
    <Wrapper>
    <ul>
      <button
      key="mega-venusaur"
      onClick={handleClick}>
      Mega Venusaur</button>

    </ul>
    </Wrapper>
  )
};

export default OtherForms;

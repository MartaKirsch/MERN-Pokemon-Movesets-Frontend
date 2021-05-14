import { Link } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/Searchbar/HintsList/Wrapper';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';


const HintsList = ({display, isError, isPending, hints}) => {

  //const hintsList = hints.map(hint=><li key={hint}><Link to={`/pokemon/${hint}`}>{hint}</Link></li>);

  return(
    <Wrapper display={display}>
      {isPending && <Loading display="true" isInHints="true"/>}
      {isError && <Error display="true" isInHints="true"/>}
      {
        !isError && hints.map(hint=>
          <li key={hint}>
            <Link to={`/pokemon/${hint}`}>{hint}</Link>
          </li>
        )
        //!isError && hintsList
      }
    </Wrapper>
  );
};

export default HintsList;

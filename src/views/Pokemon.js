import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Pokemon/Sidebar/Sidebar';
import Main from 'components/Pokemon/Main/Main';

const Pokemon = () => {
  // let { id } = useParams();
  return(
    <Wrapper>
      <Sidebar/>
      <Main/>
    </Wrapper>
  )
};

export default Pokemon;

import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Home/Sidebar/Searchbar/Searchbar';
import PokemonList from 'components/Home/Sidebar/PokemonList/PokemonList';

const Sidebar = () => {
  return(
    <Wrapper>
      <Searchbar/>
      <PokemonList/>
    </Wrapper>
  )
};

export default Sidebar;

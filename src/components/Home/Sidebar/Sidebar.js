import { useContext, useRef } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Home/Sidebar/Searchbar/Searchbar';
import PokemonList from 'components/Home/Sidebar/PokemonList/PokemonList';
import ShowSidebarContext from 'components/ShowSidebarContext';
import useOperateSidebar from 'hooks/useOperateSidebar';

const Sidebar = () => {

  const ref = useRef(null);
  useOperateSidebar(ref);

  const { showSidebar } = useContext(ShowSidebarContext);

  return(
    <Wrapper showSidebar={showSidebar} ref={ref}>
      <Searchbar />
      <PokemonList/>
    </Wrapper>
  )
};

export default Sidebar;

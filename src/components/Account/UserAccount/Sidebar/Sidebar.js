import { useState, useContext, useRef } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Account/UserAccount/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import ShowSidebarContext from 'components/ShowSidebarContext';
import useOperateSidebar from 'hooks/useOperateSidebar';

const Sidebar = () => {

  const ref = useRef(null);
  useOperateSidebar(ref);

  const [pokemon, setPokemon] = useState("");
  const { showSidebar } = useContext(ShowSidebarContext);

  const values = {pokemon, setPokemon};

  return(
    <Wrapper showSidebar={showSidebar} ref={ref}>
      <SidebarContext.Provider value={values}>
        <Searchbar placeholder="Search for pokemon"/>
        <MovesetsList url="/moveset/loadUsersList"/>
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

import { useState } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Account/UserAccount/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';

const Sidebar = () => {

  const [pokemon, setPokemon] = useState("");

  const values = {pokemon, setPokemon};

  return(
    <Wrapper>
      <SidebarContext.Provider value={values}>
        <Searchbar placeholder="Search for pokemon"/>
        <MovesetsList url="/moveset/loadUsersList"/>
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

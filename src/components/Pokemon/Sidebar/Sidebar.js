import { useState, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Pokemon/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import Context from 'components/Pokemon/Context';

const Sidebar = () => {

  const [pokemon, setPokemon] = useState("");

  const { urls, selectedForm } = useContext(Context);

  const values = {pokemon, setPokemon};

  return(
    <Wrapper>
      <SidebarContext.Provider value={values}>
        <Searchbar hintsVisible={false}/>
        <MovesetsList url="/moveset/loadList" pokeName={urls[selectedForm.indexOf(true)]}/>
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

import { useState, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Pokemon/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import Context from 'components/Pokemon/Context';

import {default as PokeSearch} from 'components/Home/Sidebar/Searchbar/Searchbar';

const Sidebar = () => {

  const [pokemon, setPokemon] = useState("");

  const { urls, selectedForm } = useContext(Context);
  const [showPokeSearch, setShowPokeSearch] = useState(true);

  const values = {pokemon, setPokemon};

  return(
    <Wrapper>
      <SidebarContext.Provider value={values}>
        {!showPokeSearch && <Searchbar
          hintsVisible={false}
          choice={true}
          setter={setShowPokeSearch}/>}
        {showPokeSearch && <PokeSearch
          choice={true}
          setter={setShowPokeSearch}/>}
        <MovesetsList url="/moveset/loadList" pokeName={urls[selectedForm.indexOf(true)]}/>
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

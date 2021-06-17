import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Pokemon/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';

import {default as PokeSearch} from 'components/Home/Sidebar/Searchbar/Searchbar';

const Sidebar = () => {

  const { name:urlPokemon } = useParams();

  const [pokemon, setPokemon] = useState("");
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
        <MovesetsList url="/moveset/loadList" pokeName={urlPokemon} />
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

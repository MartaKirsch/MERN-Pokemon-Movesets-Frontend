import { useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Pokemon/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import ShowSidebarContext from 'components/ShowSidebarContext';
import useOperateSidebar from 'hooks/useOperateSidebar';

import {default as PokeSearch} from 'components/Home/Sidebar/Searchbar/Searchbar';

const Sidebar = () => {

  const ref = useRef(null);
  useOperateSidebar(ref);

  const { name:urlPokemon } = useParams();

  const [pokemon, setPokemon] = useState("");
  const [showPokeSearch, setShowPokeSearch] = useState(true);

  const values = {pokemon, setPokemon};

  const { showSidebar } = useContext(ShowSidebarContext);

  return(
    <Wrapper showSidebar={showSidebar} ref={ref}>
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

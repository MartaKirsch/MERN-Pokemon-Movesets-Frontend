import { useState, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/Wrapper';
import Searchbar from 'components/Account/UserAccount/Sidebar/Searchbar/Searchbar';
import MovesetsList from 'components/Account/UserAccount/Sidebar/MovesetsList/MovesetsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import Context from 'components/Pokemon/Context';

const Sidebar = () => {

  const [pokemon, setPokemon] = useState("");

  const { pokemon: pokeName } = useContext(Context);

  const values = {pokemon, setPokemon};

  return(
    <Wrapper>
      <SidebarContext.Provider value={values}>
        <Searchbar hintsVisible={false}/>
        <MovesetsList url="/moveset/loadList" pokeName={pokeName.name}/>
      </SidebarContext.Provider>
    </Wrapper>
  );
};

export default Sidebar;

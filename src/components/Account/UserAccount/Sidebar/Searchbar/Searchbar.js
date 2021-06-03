import { useState, useRef, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Account/UserAccount/Sidebar/Searchbar/HintsList/HintsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import useHideHints from 'hooks/useHideHints';
import useLoadHints from 'hooks/useLoadHints';

const Searchbar = ({hintsVisible}) => {

  const ref = useRef(null);

  const { isVisible, setIsVisible } = useHideHints(ref);
  const { pokemon, setPokemon } = useContext(SidebarContext);


  return(
    <Wrapper>
      <span className="wrapper" ref={ref}>
        <input
        type="search"
        placeholder="Search for Moveset"
        onFocus={e=>setIsVisible(true)}
        onChange={e=>setPokemon(e.target.value)}
        value={pokemon}
        />
        <span className="line"></span>
        {hintsVisible && <HintsList
        display={isVisible.toString()}
        setter={setPokemon}
        input={pokemon}
        url={`/pokemon/loadFullPokedex`}
        />}
      </span>
    </Wrapper>
  )
};

Searchbar.defaultProps = {
  hintsVisible: true
};

export default Searchbar;

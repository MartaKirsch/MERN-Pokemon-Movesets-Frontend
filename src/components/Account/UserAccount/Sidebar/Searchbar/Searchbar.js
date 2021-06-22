import { useState, useRef, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Account/UserAccount/Sidebar/Searchbar/HintsList/HintsList';
import SidebarContext from 'components/Account/UserAccount/Sidebar/SidebarContext';
import useHideHints from 'hooks/useHideHints';
import useLoadHints from 'hooks/useLoadHints';

const Searchbar = ({hintsVisible, placeholder, choice, setter}) => {

  const ref = useRef(null);

  const { isVisible, setIsVisible } = useHideHints(ref);
  const { pokemon, setPokemon } = useContext(SidebarContext);


  return(
    <Wrapper choice={choice.toString()}>
      <span className="wrapper" ref={ref}>
        <div className="inputWrapper">
          <input
          type="search"
          placeholder={placeholder}
          onFocus={e=>setIsVisible(true)}
          onChange={e=>setPokemon(e.target.value)}
          value={pokemon}
          />
          {choice && <div className="buttons menu">
            <button className="P menu" onClick={e=>setter(true)}>P</button>
            <button className="M menu" onClick={e=>setter(false)}>M</button>
          </div>}
        </div>
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
  hintsVisible: true,
  placeholder: "Search for moveset",
  choice:false,
  setter:()=>{}
};

export default Searchbar;

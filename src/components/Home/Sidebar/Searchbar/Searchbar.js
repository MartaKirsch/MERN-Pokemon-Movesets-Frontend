import { useState, useRef } from 'react';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Home/Sidebar/Searchbar/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';
import useLoadHints from 'hooks/useLoadHints';

const Searchbar = ({choice,setter}) => {

  const ref = useRef(null);
  const [searchPhrase, setSearchPhrase] = useState("");

  const { isVisible, setIsVisible } = useHideHints(ref);
  const { selectedHints, isError, isPending } = useLoadHints(`/pokemon/loadFullPokedex`,searchPhrase);

  const handleFocus = () => {
    setIsVisible(true);
  };

  //line was outside inputWrapper
  return(
    <Wrapper choice={choice.toString()}>
      <span className="wrapper" ref={ref}>
        <div className="inputWrapper">
          <input
          type="search"
          placeholder="Search for pokemon"
          onFocus={handleFocus}
          onChange={e=>setSearchPhrase(e.target.value)}
          value={searchPhrase}
          />
          {choice && <div className="buttons menu">
            <button className="P menu" onClick={e=>setter(true)}>P</button>
            <button className="M menu" onClick={e=>setter(false)}>M</button>
          </div>}
          <span className="line"></span>
        </div>
        <HintsList
        display={isVisible.toString()}
        isError={isError}
        isPending={isPending}
        hints={selectedHints}
        />
      </span>
    </Wrapper>
  )
};

Searchbar.defaultProps = {
  choice:false,
  setter:()=>{}
};

export default Searchbar;

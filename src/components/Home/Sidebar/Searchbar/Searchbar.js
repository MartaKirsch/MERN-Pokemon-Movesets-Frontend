import { useState, useRef } from 'react';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Home/Sidebar/Searchbar/HintsList/HintsList';
import useHideHints from 'hooks/useHideHints';
import useLoadHints from 'hooks/useLoadHints';

const Searchbar = () => {

  const ref = useRef(null);
  const [searchPhrase, setSearchPhrase] = useState("");

  const { isVisible, setIsVisible } = useHideHints(ref);
  const { selectedHints, isError, isPending } = useLoadHints(`/pokemon/loadFullPokedex`,searchPhrase);

  const handleFocus = () => {
    setIsVisible(true);
  };

  return(
    <Wrapper>
      <span className="wrapper" ref={ref}>
        <input
        type="search"
        placeholder="Search for Pokemon"
        onFocus={handleFocus}
        onChange={e=>setSearchPhrase(e.target.value)}
        value={searchPhrase}
        />
        <span className="line"></span>
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

export default Searchbar;

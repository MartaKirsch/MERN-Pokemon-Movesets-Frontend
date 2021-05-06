import { useState } from 'react';
import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';
import HintsList from 'components/Home/Sidebar/Searchbar/HintsList/HintsList';

const Searchbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return(
    <Wrapper>
      <span className="wrapper">
        <input
        type="search"
        placeholder="Search for Pokemon"
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
        <span className="line"></span>
        <HintsList display={isVisible.toString()}/>
      </span>
    </Wrapper>
  )
};

export default Searchbar;

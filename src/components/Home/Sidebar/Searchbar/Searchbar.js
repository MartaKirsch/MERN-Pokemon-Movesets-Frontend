import Wrapper from 'components/Home/Sidebar/Searchbar/Wrapper';

const Searchbar = () => {
  return(
    <Wrapper>
      <span className="wrapper">
        <input type="search" placeholder="Search for Pokemon"/>
        <span className="line"></span>
      </span>
    </Wrapper>
  )
};

export default Searchbar;

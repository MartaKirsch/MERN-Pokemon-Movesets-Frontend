import { useState, useRef, useContext } from 'react';
import Wrapper from 'components/Home/Sidebar/PokemonList/Wrapper';
import MovesetsListItem from 'components/Account/UserAccount/Sidebar/MovesetsList/MovesetsListItem';
import LoadMoreButton from 'components/Home/Sidebar/PokemonList/LoadMoreButton';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';
import useLoadMovesets from 'hooks/useLoadMovesets';


const MovesetsList = ({url, pokeName,showUpdateDeleteBtns}) => {

  const listRef = useRef(null);


  const { items, isError, isPending, skip, setSkip } = useLoadMovesets(url, listRef, pokeName);


  return(
    <Wrapper>
      <ul ref={listRef}>
        {items.length!==0 &&
          items.map((item,i)=>(
            <MovesetsListItem
            key={item._id}
            url={item.url}
            name={item.name}
            pokemon={item.pokemon}
            id={item._id}
            showUpdateDeleteBtns={showUpdateDeleteBtns}
            />
          ))
        }
        {(!isPending && !isError && items.length===0) && <h2>No movesets yet!</h2>}
      </ul>
      <Loading display={isPending.toString()}/>
      <Error display={isError.toString()}/>
      <LoadMoreButton
      onClick={e=>setSkip(listRef.current.childElementCount)}
      disabled={isPending}> Load More </LoadMoreButton>
    </Wrapper>
  )
};


MovesetsList.defaultProps = {
  pokeName:"",
  showUpdateDeleteBtns:false
};

export default MovesetsList;

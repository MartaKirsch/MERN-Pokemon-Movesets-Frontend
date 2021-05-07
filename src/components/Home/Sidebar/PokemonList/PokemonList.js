import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Wrapper from 'components/Home/Sidebar/PokemonList/Wrapper';
import PokemonListItem from 'components/Home/Sidebar/PokemonList/PokemonListItem/PokemonListItem';
import LoadMoreButton from 'components/Home/Sidebar/PokemonList/LoadMoreButton';
import Loading from 'components/Home/Sidebar/PokemonList/Loading/Loading';


const PokemonList = () => {

  const listRef = useRef(null);
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const loadMore = () => {

    const skip = listRef.current.childElementCount;

    setIsPending(true);

    axios.get(`/pokemon/loadPokedexList/${skip}`).then(res=>{
      if(res.statusText!=="OK")
      {
        setIsPending(false);
        throw new Error("Error");
      }

      const newArr = [...items,...res.data.list];
      setItems(newArr);
      setIsPending(false);

    }).catch(err=>console.log('sth is wrong'));
  }

  useEffect(()=>{

    let source = axios.CancelToken.source();

    const skip = listRef.current.childElementCount;

    setIsPending(true);

    axios.get(`/pokemon/loadPokedexList/${skip}`, {cancelToken: source.token}).then(res=>{
      if(res.statusText!=="OK")
      {
        setIsPending(false);
        throw new Error("Error");
      }

      const newArr = [...items,...res.data.list];
      setItems(newArr);
      setIsPending(false);

    }).catch(err=>console.log('sth is wrong'));


    return () => {
      source.cancel("Cancelling in cleanup");
    }

  },[]);

  return(
    <Wrapper>
      <ul ref={listRef}>
        {
          items.map(item=>(
            <PokemonListItem
            key={`${item.name}_${item.id}`}
            url={item.img}
            name={item.name}
            number={item.id}
            types={item.types}
            />
          ))
        }
      </ul>
      <Loading display={isPending.toString()}/>
      <LoadMoreButton onClick={loadMore} disabled={isPending}>Load More</LoadMoreButton>
    </Wrapper>
  )
};

export default PokemonList;

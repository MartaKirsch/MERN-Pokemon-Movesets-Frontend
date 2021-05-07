import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Wrapper from 'components/Home/Sidebar/PokemonList/Wrapper';
import PokemonListItem from 'components/Home/Sidebar/PokemonList/PokemonListItem/PokemonListItem';
import LoadMoreButton from 'components/Home/Sidebar/PokemonList/LoadMoreButton';

const PokemonList = () => {

  const listRef = useRef(null);
  const [items, setItems] = useState([]);

  const loadMore = () => {

    const skip = listRef.current.childElementCount;

    axios.get(`/pokemon/loadPokedexList/${skip}`).then(res=>{
      if(res.statusText!=="OK")
      {
        throw new Error("Error");
      }
      
      const newArr = [...items,...res.data.list];
      setItems(newArr);

    }).catch(err=>console.log('sth is wrong'));
  }

  useEffect(()=>{

    let source = axios.CancelToken.source();

    const skip = listRef.current.childElementCount;

    axios.get(`/pokemon/loadPokedexList/${skip}`, {cancelToken: source.token}).then(res=>{
      if(res.statusText!=="OK")
      {
        throw new Error("Error");
      }

      const newArr = [...items,...res.data.list];
      setItems(newArr);

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
      <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
    </Wrapper>
  )
};

export default PokemonList;

// import { useRef, useEffect } from 'react';
import Wrapper from 'components/Home/Sidebar/PokemonList/Wrapper';
import PokemonListItem from 'components/Home/Sidebar/PokemonList/PokemonListItem/PokemonListItem';
import LoadMoreButton from 'components/Home/Sidebar/PokemonList/LoadMoreButton';

const PokemonList = () => {

  return(
    <Wrapper>
      <PokemonListItem
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" name="bulbasaur"
      number="1"
      types={['grass','poison']}
      />
      <PokemonListItem
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      name="venusaur"
      number="3"
      types={['grass','poison']}
      />
      <PokemonListItem
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" name="bulbasaur"
      number="1"
      types={['grass','poison']}
      />
      <PokemonListItem
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      name="venusaur"
      number="3"
      types={['grass','poison']}
      />
      <PokemonListItem
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" name="bulbasaur"
      number="1"
      types={['grass','poison']}
      />
      <LoadMoreButton>Load More</LoadMoreButton>
    </Wrapper>
  )
};

export default PokemonList;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Wrapper from 'components/Home/Sidebar/PokemonList/Loading/Wrapper';
import {ReactComponent as Pokeballs} from 'imgs/loading.svg';

const Loading = ({display}) => {

  const pokeballsRef = useRef(null);

  useEffect(()=>{


    const tl = gsap.timeline({ repeat: -1 });

    if(display==="true")
    {
      const pokeballs = pokeballsRef.current.querySelectorAll('.pokeball');

      gsap.set(pokeballs,{autoAlpha:0});

      tl.addLabel('start')
      .fromTo(pokeballs,{ autoAlpha:0, scale:0.8, transformOrigin:"50% 50%"},{stagger:0.25, autoAlpha:1, duration:0.5, scale:1, transformOrigin:"50% 50%"});
    }

    return ()=>{
      tl.restart();
      tl.kill();
    }
  },[display]);


  return(
    <Wrapper display={display}>
      <Pokeballs  ref={pokeballsRef}/>
    </Wrapper>
  )
};

export default Loading;

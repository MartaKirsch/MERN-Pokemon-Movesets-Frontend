import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Image/Wrapper';

const Image = ({ pokemon }) => {

  return(
    <Wrapper>
      <img src={pokemon.sprites.front_default} alt=""/>
    </Wrapper>
  )
};

export default Image;

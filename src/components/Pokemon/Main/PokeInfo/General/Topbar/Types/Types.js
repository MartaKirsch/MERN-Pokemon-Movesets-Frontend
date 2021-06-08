import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Topbar/Types/Wrapper';

const Types = ({ pokemon }) => {
  return(
    <Wrapper className="box">
      {
        pokemon.types.map(({type:{name}})=>
          <div className={`type ${name}`} key={name}>{name}</div>
        )
      }


    </Wrapper>
  )
};

export default Types;

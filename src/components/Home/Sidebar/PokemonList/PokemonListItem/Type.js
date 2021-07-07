import styled from 'styled-components';

const Type = styled.div`
  color:white;
  text-transform: uppercase;
  display:flex;

  @media(min-width: 200px)
  {
    div
    {
      padding:2vw 3vw;
      font-size:3vw;
      border-radius:10px;
      margin:0 2vw;
    }
  }

  @media(min-width: 576px)
  {
    div
    {
      padding:1vw 1.5vw;
      font-size:1.7vw;
      border-radius:10px;
      margin:0 1vw;
    }
  }

  @media(min-width: 768px)
  {
    div
    {
      padding:1vw 1.5vw;
      font-size:1.7vw;
      border-radius:10px;
      margin:0 1vw;
    }
  }

  @media(min-width: 992px)
  {
    div
    {
      padding:0.75vw 1.25vw;
      font-size:1.4vw;
      border-radius:10px;
      margin:0.5vw;
    }
  }

  @media(min-width: 1200px)
  {
    div
    {
      padding:0.45vw .65vw;
      font-size:0.9vw;
      border-radius:10px;
      margin:0.5vw;
    }
  }

  @media(min-width: 1600px)
  {
    div
    {
      padding:0.4vw .6vw;
      font-size:.8vw;
      border-radius:10px;
      margin:0.25vw;
    }
  }

  div:first-child
  {
    margin-left:0;
  }

  div:last-child
  {
    margin-right:0;
  }


  .fire
  {
    background-color: #ff6043;
  }

  .water
  {
    background-color: #3399ff;
  }

  .grass
  {
    background-color: #77cc55;
  }

  .normal
  {
    background-color: #aaaa99;
  }

  .electric
  {
    background-color: #ffcc33;
  }

  .ice
  {
    background-color: #66ccff;
  }

  .fighting
  {
    background-color: #bb5644;
  }

  .poison
  {
    background-color: #aa5599;
  }

  .ground
  {
    background-color: #ddbb55;
  }

  .flying
  {
    background-color: #889aff;
  }

  .psychic
  {
    background-color: #ff5599;
  }

  .bug
  {
    background-color: #aabb22;
  }

  .rock
  {
    background-color: #bbaa66;
  }

  .ghost
  {
    background-color: #6666bb;
  }

  .dragon
  {
    background-color: #7866ee;
  }

  .dark
  {
    background-color: #775544;
  }

  .steel
  {
    background-color: #aaaabb;
  }

  .fairy
  {
    background-color: #ee99ee;
  }
`;

export default Type;

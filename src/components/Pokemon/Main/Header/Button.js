import styled from 'styled-components';

const Button = styled.button`

  height:90%;

  a.buttonLink
  {
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }

  .frame
  {
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    background-color:var(--grey);
    position:relative;
    z-index:1;
  }

  .frame::after
  {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top:0; left:0;
    border-radius:15px;
    background-color:var(--grey_D);
    z-index:-1;
    transform:scale(0);
    transition: transform 0.25s ease-out;
  }

  .frame::before
  {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    border-radius:15px;
    opacity:0;
    box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    -webkit-box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    -moz-box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    animation-fill-mode: forwards;
  }

  .frame:hover::after, &:focus .frame::after
  {
    transform:scale(1);
  }

  .frame:hover::before, &:focus .frame::before
  {
    animation: showbefore 0.1s 0.25s forwards;
    -moz-animation: showbefore 0.1s 0.25s forwards;
    -webkit-animation: showbefore 0.1s 0.25s forwards;
  }

  .frame:hover svg, &:focus svg
  {
    transform: scale(0.8);
  }

  svg
  {
    transition: transform 0.25s ease-out;
  }



  @keyframes showbefore {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }


  @media(min-width: 200px)
  {

  }

  @media(min-width: 576px)
  {
    width:18%;

    &:first-child
    {
      margin: 0 0 0 5vw;
    }

    &:last-child
    {
      margin: 0 5vw 0 0;
    }

    .frame
    {
      height:5vw;
      width:5vw;
    }

    svg
    {
      width:3vw;
      height:3vw;
    }

    img
    {
      width:7vw;
      height:7vw;
    }
  }

  @media(min-width: 768px)
  {
    width:18%;

    &:first-child
    {
      margin: 0 0 0 3vw;
    }

    &:last-child
    {
      margin: 0 3vw 0 0;
    }

    .frame
    {
      height:5vw;
      width:5vw;
    }

    svg
    {
      width:2.9vw;
      height:2.9vw;
    }

    img
    {
      width:10vw;
      height:10vw;
    }
  }

  @media(min-width: 992px)
  {
    width:18%;

    &:first-child
    {
      margin: 0 0 0 3vw;
    }

    &:last-child
    {
      margin: 0 3vw 0 0;
    }

    .frame
    {
      height:4vw;
      width:4vw;
    }

    svg
    {
      width:2.9vw;
      height:2.9vw;
    }

    img
    {
      width:7.25vw;
      height:7.25vw;
    }
  }

  @media(min-width: 1200px)
  {
    width:18%;

    &:first-child
    {
      margin: 0 0 0 2vw;
    }

    &:last-child
    {
      margin: 0 2vw 0 0;
    }

    .frame
    {
      height:3.3vw;
      width:3.3vw;
    }

    svg
    {
      width:2.2vw;
      height:2.2vw;
    }

    img
    {
      width:5.5vw;
      height:5.5vw;
    }
  }

  @media(min-width: 1600px)
  {
    width:15%;

    &:first-child
    {
      margin: 0 0 0 2vw;
    }

    &:last-child
    {
      margin: 0 2vw 0 0;
    }

    .frame
    {
      height:3vw;
      width:3vw;
    }

    svg
    {
      width:2vw;
      height:2vw;
    }

    img
    {
      width:5vw;
      height:5vw;
    }
  }
`;

export default Button;

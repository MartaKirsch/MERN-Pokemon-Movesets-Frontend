import styled from 'styled-components';

const Button = styled.button`

  width:15%;
  height:90%;

  a.buttonLink
  {
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }

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
    display:flex;
    justify-content:center;
    align-items:center;
    height:3vw;
    width:3vw;
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
    width:2vw;
    height:2vw;
    transition: transform 0.25s ease-out;
  }

  img
  {
    width:5vw;
    height:5vw;
  }



  @keyframes showbefore {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }
`;

export default Button;

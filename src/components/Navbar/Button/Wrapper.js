import styled from 'styled-components';

const Wrapper = styled.button`

  width:2.5vw;
  height:2.5vw;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:15px;
  &:nth-of-type(2)
  {
    margin: 0 2vw;
  }
  background-color: var(--${props=>props.color});
  position:relative;
  z-index:1;

  @keyframes showbefore {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }

  &::after
  {
    content:'';
    position:absolute;
    background-color: var(--${props=>props.color+'_L'});
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    transform:scale(0);
    transition: transform 0.25s ease-out;
    border-radius:15px;
  }

  &::before
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

  &:hover::after, &:focus::after
  {
    transform:scale(1);
  }
  &:hover::before, &:focus::before
  {
    /* animation-fill-mode: forwards; */
    /* animation:showbefore 0.1s linear 0.25s; */
    animation: showbefore 0.1s 0.25s forwards;
    -moz-animation: showbefore 0.1s 0.25s forwards;
    -webkit-animation: showbefore 0.1s 0.25s forwards;
  }

  img
  {
    transition: transform 0.25s ease-out;
  }

  &:hover img, &:focus img
  {
    transform: scale(0.8);
  }
`;

export default Wrapper;

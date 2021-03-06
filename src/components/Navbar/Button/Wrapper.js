import styled from 'styled-components';

const Wrapper = styled.div`

  width:2.5vw;
  height:2.5vw;
  &:nth-of-type(2)
  {
    margin: 0 2vw;
  }

  @keyframes showbefore {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }

  a
  {
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    width:100%;
    height:100%;
    background-color: var(--${props=>props.color});
    position:relative;
    z-index:1;
  }

  a::after
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

  a::before
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

  a:hover::after, a:focus::after
  {
    transform:scale(1);
  }
  a:hover::before, a:focus::before
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
    width:1.56vw;
    height:1.56vw;
  }

  a:hover img, a:focus img
  {
    transform: scale(0.8);
  }
`;

export default Wrapper;

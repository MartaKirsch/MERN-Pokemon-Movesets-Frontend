import styled from 'styled-components';

const Wrapper = styled.li`

  width:80%;
  height:7vw;
  background-color:var(--grey);
  margin: 1vw 0;
  border-radius:15px;
  position:relative;

  a
  {
    border-radius:15px;
    padding:1vw;
    width:100%;
    height:100%;
    display:flex;
    align-items:space-between;
    position: relative;
    z-index:1;
    overflow:hidden;
  }

  a::before
  {
    transform: scaleX(0);
    transform-origin: bottom right;
    content: "";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #e3e3e3;
    z-index: -1;
    transition: transform .4s ease;
  }

  a:hover::before,a:focus::before
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  img
  {
    height:5vw;
    width:5vw;
  }

  .line
  {
    position:absolute;
    width:98%;
    left:1%;
    height:6px;
    background-color:var(--blue);
    transform:scaleX(0);
    transition: transform .4s ease .2s;
    transform-origin: bottom right;
  }

  a:focus + .line, a:hover + .line
  {
    transform:scaleX(1);
    transform-origin: bottom left;
  }

`;

export default Wrapper;

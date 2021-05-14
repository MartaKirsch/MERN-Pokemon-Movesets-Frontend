import styled from 'styled-components';

const Wrapper = styled.div`

  width:18%;
  height:100%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;

  button
  {
    width:100%;
    height:28%;
    font-size:1.2vw;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    color:black;
    position: relative;
    z-index:1;
  }

  button:disabled
  {
    background-color:var(--grey_D);
  }

  button::before
  {
    transform: scaleX(0);
    transform-origin: bottom right;
    content: "";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color:var(--pistachio);
    z-index: -1;
    transition: transform .4s ease;
  }

  button:not([disabled]):hover::before,button:not([disabled]):focus::before
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default Wrapper;

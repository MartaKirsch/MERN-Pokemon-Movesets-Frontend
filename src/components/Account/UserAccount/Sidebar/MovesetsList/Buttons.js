import styled from 'styled-components';

const Buttons = styled.div`

  width:100%;
  display:flex;
  justify-content:center;

  button
  {
    font-size:1vw;
    display:flex;
    justify-content:center;
    height:1.5vw;
    width:48%;
    position:relative;
    z-index:1;
    overflow:hidden;
  }

  button.update
  {
    color:black;
    background-color:var(--pistachio);
    border-bottom-left-radius:15px;
  }

  button.delete
  {
    color:white;
    background-color:var(--error_red);
    border-bottom-right-radius:15px;
  }

  button::after
  {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top: 0; right: 0; bottom: 0; left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    background-color: var(--blue);
    z-index:-1;
  }

  button:hover::after, button:focus::after
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default Buttons;

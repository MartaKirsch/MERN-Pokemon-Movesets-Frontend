import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:15%;
  display:flex;
  justify-content:center;
  align-items:center;

  .wrapper
  {
    width:80%;
    height:50%;
    position:relative;
  }

  .inputWrapper
  {
    display:flex;
    width:100%;
    height:100%;
    justify-content:space-between;
  }

  .buttons
  {
    display:flex;
    flex-direction:column;
    height:100%;
    width:8%;
    justify-content:space-between;
  }

  .buttons button
  {
    width:100%;
    height:48%;
    font-size:0.7vw;
    border-radius:10px;
    position:relative;
    z-index:1;
    overflow:hidden;
    color:#555;
  }

  .buttons button::after
  {
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    transform:scale(0);
    top:0;left:0;
    transition:transform 0.2s ease-out;
    border-radius:10px;
    z-index:-1;
  }

  .buttons button:hover::after,.buttons button:focus::after
  {
    transform:scale(1);
  }

  button.P::after
  {
    background-color:var(--blue_L);
  }

  button.M::after
  {
    background-color:var(--yellow_L);
  }

  button.P
  {
    background-color:var(--blue);
  }

  button.M
  {
    background-color:var(--yellow);
  }

  input
  {
    width:100%;
    height:100%;
    border-radius:15px;
    border:none;
    color:black;
    padding: 0 1vw;
    font-size:1.1vw;
  }

  .line
  {
    position:absolute;
    width:98%;
    height:4px;
    background-color:var(--pistachio);
    bottom:-1%;
    right:1%;
    z-index:2;
  }

  .line::after
  {
    content:'';
    position:absolute;
    width:100%;
    height:125%;
    background-color:var(--blue);
    transform:scale(0);
    transition:transform 0.4s ease-out;
  }

  input:focus + .line::after,input:hover + .line::after
  {
    transform:scale(1);
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:15%;
  display:flex;
  justify-content:center;
  align-items:center;

  .wrapper
  {
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
    justify-content:space-between;
  }

  .buttons button
  {
    width:100%;
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
    border:none;
    color:black;
  }

  .line
  {
    position:absolute;
    width:98%;
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

  @media(min-width: 200px)
  {

  }

  @media(min-width: 768px)
  {

    .wrapper
    {
      width:80%;
      height:75%;
    }

    .buttons
    {
      width:15%;
    }

    .buttons button
    {
      position:relative;
      z-index:3;
      font-size:1.5vw;
      height:50%;
      border-radius:9px;
    }

    input
    {
      border-radius:15px;
      padding: 0 2vw;
      font-size:2vw;
    }

    .line
    {
      height:4px;
    }
  }

  @media(min-width: 992px)
  {

    .wrapper
    {
      width:80%;
      height:60%;
    }

    .buttons
    {
      width:10%;
    }

    .buttons button
    {
      position:relative;
      z-index:3;
      font-size:1.1vw;
      height:50%;
      border-radius:9px;
    }

    input
    {
      border-radius:15px;
      padding: 0 1.5vw;
      font-size:1.6vw;
    }

    .line
    {
      height:4px;
    }
  }

  @media(min-width: 1200px)
  {
    .wrapper
    {
      width:80%;
      height:55%;
    }

    .buttons
    {
      width:8%;
    }

    .buttons button
    {
      font-size:0.9vw;
      height:50%;
      border-radius:9px;
    }

    input
    {
      border-radius:15px;
      padding: 0 1vw;
      font-size:1.2vw;
    }
  }

  @media(min-width: 1600px)
  {
    .wrapper
    {
      width:80%;
      height:50%;
    }

    .buttons
    {
      width:8%;
    }

    .buttons button
    {
      font-size:0.7vw;
      height:48%;
      border-radius:10px;
    }

    input
    {
      border-radius:15px;
      padding: 0 1vw;
      font-size:1.1vw;
    }

  }
`;

export default Wrapper;

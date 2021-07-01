import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;

  label
  {
    color:white;
  }

  .wrapper
  {
    position:relative;
  }

  input
  {
    width:100%;
    border-radius:15px;
    border:none;
    color:black;
  }

  .line.red
  {
    background-color:var(--error_red);
  }

  .line
  {
    position:absolute;
    width:98%;
    height:4px;
    background-color:var(--pistachio);
    bottom:-1%;
    right:1%;
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
    width:45vw;
    margin: 0 0 2.5vw 0;

    label
    {
      font-size:3.5vw;
      color:white;
      margin:0 0 2.25vw 0;
    }

    .wrapper
    {
      width:85%;
    }

    input
    {
      height:6.5vw;
      padding: 0 2vw;
      font-size:2.2vw;
    }
  }

  @media(min-width: 992px)
  {
    width:35vw;
    margin: 0 0 2.5vw 0;

    label
    {
      font-size:2.8vw;
      color:white;
      margin:0 0 2vw 0;
    }

    .wrapper
    {
      width:85%;
    }

    input
    {
      height:5vw;
      padding: 0 2vw;
      font-size:1.7vw;
    }
  }

  @media(min-width: 1200px)
  {
    width:35vw;
    margin: 0 0 2.5vw 0;

    label
    {
      font-size:2.3vw;
      color:white;
      margin:0 0 1.25vw 0;
    }

    .wrapper
    {
      width:85%;
    }

    input
    {
      height:4vw;
      padding: 0 1.25vw;
      font-size:1.3vw;
    }
  }

  @media(min-width: 1600px)
  {
    width:30vw;
    margin: 0 0 2vw 0;

    label
    {
      font-size:2vw;
      color:white;
      margin:0 0 1vw 0;
    }

    .wrapper
    {
      width:90%;
    }

    input
    {
      height:3vw;
      padding: 0 1vw;
      font-size:1.1vw;
    }
  }
`;

export default Wrapper;

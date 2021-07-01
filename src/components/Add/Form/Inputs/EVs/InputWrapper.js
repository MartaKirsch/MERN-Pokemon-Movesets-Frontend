import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;

  input, select
  {
    border-radius:15px;
    border:none;
    color:black;
  }

  select, .textWrapper
  {
    width:40%;
  }

  input
  {
    width:100%;
  }

  .textWrapper
  {
    position:relative;
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

  select.err
  {
    background-color:var(--error_red);
    color:white;
    border:2px solid white;
  }

  @media(min-width: 200px)
  {

  }
  @media(min-width: 768px)
  {
    margin: 0 0 2.5vw 0;

    input, select
    {
      height:6.5vw;
      padding: 0 2vw;
      font-size:2.2vw;
    }
  }

  @media(min-width: 992px)
  {
    margin: 0 0 2.5vw 0;

    input, select
    {
      height:5vw;
      padding: 0 2vw;
      font-size:1.7vw;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 2.5vw 0;

    input, select
    {
      height:4vw;
      padding: 0 1.25vw;
      font-size:1.3vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 2vw 0;

    input, select
    {
      height:3vw;
      padding: 0 1vw;
      font-size:1.1vw;
    }
  }
`;

export default Wrapper;

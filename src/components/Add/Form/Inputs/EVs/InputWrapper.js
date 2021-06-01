import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  justify-content:space-between;
  margin: 0 0 2vw 0;
  width:100%;



  input, select
  {
    height:3vw;
    border-radius:15px;
    border:none;
    color:black;
    padding: 0 1vw;
    font-size:1.1vw;
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

  button{
    background-color:var(--error_red);
    
  }

`;

export default Wrapper;

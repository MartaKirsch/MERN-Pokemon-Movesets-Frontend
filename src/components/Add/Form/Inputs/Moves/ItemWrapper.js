import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;
  margin: 0 0 2vw 0;
  position:relative;
  width:30vw;

  label
  {
    font-size:2vw;
    color:white;
    margin:0 0 1vw 0;
  }

  .wrapper
  {
    width:90%;
    position:relative;
  }

  input
  {
    width:100%;
    height:3vw;
    border-radius:15px;
    border:none;
    color:black;
    padding: 0 1vw;
    font-size:1.1vw;
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
`;

export default Wrapper;

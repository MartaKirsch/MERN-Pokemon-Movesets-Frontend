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

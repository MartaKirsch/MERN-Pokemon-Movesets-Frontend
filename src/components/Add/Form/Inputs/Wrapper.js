import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  position:relative;
  margin: 0 0 4vw 0;

  label
  {
    font-size:2vw;
    color:white;
    margin:0 0 1vw 0;
  }

  input, textarea
  {
    width:30vw;
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

  input:focus + .line::after,input:hover + .line::after,
  textarea:focus + .line::after,textarea:hover + .line::after
  {
    transform:scale(1);
  }

  textarea
  {
    height:10vw;
    font-family:inherit;
    padding:1vw;
    resize: none;
  }

  textarea:focus
  {
    outline:none;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.span`

  &
  {
    width:70%;
    position:relative;
    margin:2vw 0 0;
  }

  &:nth-child(2)
  {
    margin:3vw 0 0;
  }

  &:last-child
  {
    margin-bottom:4vw;
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

  .line
  {
    position:absolute;
    width:98%;
    height:4px;
    background-color:var(--pistachio);
    bottom:-1%;
    right:1%;
  }

  .red{
    background-color:var(--error_red);
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

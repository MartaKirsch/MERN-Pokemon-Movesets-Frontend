import styled from 'styled-components';

const Button = styled.button`


  background-color: ${({deleteBtn})=> deleteBtn ? "var(--error_red)" : "var(--pistachio)" };
  height:2vw;
  width:2vw;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.2vw;
  border-radius:15px;
  color: ${({deleteBtn})=> deleteBtn ? "white" : "black" };

  &:disabled
  {
    background-color:var(--grey);
    color:black;
  }

`;

export default Button;

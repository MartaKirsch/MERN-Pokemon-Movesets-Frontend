import styled from 'styled-components';

const Button = styled.button`


  background-color: ${({deleteBtn})=> deleteBtn ? "var(--error_red)" : "var(--pistachio)" };
  display:flex;
  align-items:center;
  justify-content:center;
  color: ${({deleteBtn})=> deleteBtn ? "white" : "black" };

  &:disabled
  {
    background-color:var(--grey);
    color:black;
  }

  @media(min-width: 200px)
  {
    height:9vw;
    width:9vw;
    font-size:5vw;
    border-radius:12px;
  }

  @media(min-width: 576px)
  {
    height:5vw;
    width:5vw;
    font-size:3.3vw;
    border-radius:17px;
  }

  @media(min-width: 768px)
  {
    height:5vw;
    width:5vw;
    font-size:3vw;
    border-radius:17px;
  }

  @media(min-width: 992px)
  {
    height:4vw;
    width:4vw;
    font-size:2vw;
    border-radius:17px;
  }

  @media(min-width: 1200px)
  {
    height:3vw;
    width:3vw;
    font-size:1.6vw;
    border-radius:17px;
  }

  @media(min-width: 1600px)
  {
    height:2vw;
    width:2vw;
    font-size:1.2vw;
    border-radius:15px;
  }
`;

export default Button;

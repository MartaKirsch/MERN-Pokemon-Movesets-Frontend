import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing:border-box;
  }

  /* variables */
  :root
  {
    --red:#E36C3D;
    --pistachio:#ADEEC2;
    --yellow:#F5DA88;
    --grey:#F5F5F5;

    --pistachio_D:#9CDDB1;
    --yellow_D:#E4C977;
    --grey_D:#E4E4E4;

    --pistachio_L:#BEFFD3;
    --yellow_L:#F6EB99;
    --grey_L:#FFFFFF;
  }

  body
  {
    background-color: var(--red);
    font-family: 'Montserrat', sans-serif;
    // font-weight:300;
    padding:0;
    margin:0;
  }

  h1
  {
    // font-weight:inherit;
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  button{
    cursor:pointer;
    color:white;
    outline:none;
    border:none;
    font-family:inherit;
    padding:0;
    background-color:inherit;
  }

  input{
    border:none;
    outline:none;
    color:white;
    font-family:inherit;
  }

  input[type="date"]{
    color:white;
  }

  select{
    outline:none;
    border:none;
    color:white;
    font-family:inherit;
  }
`;

export default GlobalStyle;

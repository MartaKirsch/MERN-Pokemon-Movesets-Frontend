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
    --medGrey:#555555;
    --blue:#66CCFF;

    --pistachio_D:#9CDDB1;
    --yellow_D:#E4C977;
    --grey_D:#E4E4E4;

    --pistachio_L:#BEFFD3;
    --yellow_L:#F6EB99;
    --grey_L:#FFFFFF;
    --blue_L:#77ddFF;

    --error_red:#A01800;
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
    outline:none;
  }

  button{
    cursor:pointer;
    color:white;
    outline:none;
    border:none;
    font-family:inherit;
    padding:0;
    background-color:inherit;
    outline:none;
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

  ul,li
  {
    list-style: none;
    padding: 0;
    margin: 0;
    outline:none;
  }




  .type
  {
    color: white;
    text-transform: uppercase;
  }

  .fire
  {
    background-color: #ff6043;
  }

  .water
  {
    background-color: #3399ff;
  }

  .grass
  {
    background-color: #77cc55;
  }

  .normal
  {
    background-color: #aaaa99;
  }

  .electric
  {
    background-color: #ffcc33;
  }

  .ice
  {
    background-color: #66ccff;
  }

  .fighting
  {
    background-color: #bb5644;
  }

  .poison
  {
    background-color: #aa5599;
  }

  .ground
  {
    background-color: #ddbb55;
  }

  .flying
  {
    background-color: #889aff;
  }

  .psychic
  {
    background-color: #ff5599;
  }

  .bug
  {
    background-color: #aabb22;
  }

  .rock
  {
    background-color: #bbaa66;
  }

  .ghost
  {
    background-color: #6666bb;
  }

  .dragon
  {
    background-color: #7866ee;
  }

  .dark
  {
    background-color: #775544;
  }

  .steel
  {
    background-color: #aaaabb;
  }

  .fairy
  {
    background-color: #ee99ee;
  }
`;

export default GlobalStyle;

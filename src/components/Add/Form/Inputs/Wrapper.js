import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  position:relative;

  label
  {
    color:white;
  }

  input, textarea
  {
    border-radius:15px;
    border:none;
    color:black;
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
    font-family:inherit;
    resize: none;
  }

  textarea:focus
  {
    outline:none;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {

  }

  @media(min-width: 1200px)
  {
    margin: 0 0 5vw 0;

    label
    {
      font-size:2.3vw;
      margin:0 0 1.5vw 0;
    }

    input, textarea
    {
      width:35vw;
      height:4vw;
      padding: 0 1.25vw;
      font-size:1.3vw;
    }

    textarea
    {
      height:10vw;
      padding:1vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 4vw 0;

    label
    {
      font-size:2vw;
      margin:0 0 1vw 0;
    }

    input, textarea
    {
      width:30vw;
      height:3vw;
      padding: 0 1vw;
      font-size:1.1vw;
    }

    textarea
    {
      height:10vw;
      padding:1vw;
    }
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.span`

  &
  {
    position:relative;
  }

  input
  {
    width:100%;
    border-radius:15px;
    border:none;
    color:black;
  }

  .line
  {
    position:absolute;
    width:98%;
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


  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    &
    {
      width:65%;
      margin:3vw 0 0;
    }

    &:nth-child(2)
    {
      margin:3.5vw 0 0;
    }

    &:last-child
    {
      margin-bottom:5vw;
    }

    input
    {
      height:4.5vw;
      padding: 0 1.5vw;
      font-size:1.6vw;
    }

    .line
    {
      height:4px;
    }
  }

  @media(min-width: 1200px)
  {
    &
    {
      width:65%;
      margin:2.5vw 0 0;
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
      height:3.6vw;
      padding: 0 1vw;
      font-size:1.2vw;
    }

    .line
    {
      height:4px;
    }
  }

  @media(min-width: 1600px)
  {
    &
    {
      width:70%;
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
      height:3vw;
      padding: 0 1vw;
      font-size:1.1vw;
    }

    .line
    {
      height:4px;
    }
  }
`;

export default Wrapper;

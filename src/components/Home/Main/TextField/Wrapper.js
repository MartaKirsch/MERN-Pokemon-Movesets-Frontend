import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-y:auto;
  background-color:var(--grey);
  color:black;

  button.logout
  {
    color:black;
    background-color: var(--pistachio);
    border-radius:15px;
  }

  h1
  {
    font-weight:normal;
  }

  @media(min-width: 200px)
  {
    height:90%;

    h1
    {
      font-size:3.8vw;
    }

    button.logout
    {
      font-size:3vw;
      width:26vw;
      height:9vw;
    }
  }

  @media(min-width: 576px)
  {
    height:85%;

    h1
    {
      font-size:3.4vw;
    }

    button.logout
    {
      font-size:2vw;
      width:16vw;
      height:6vw;
    }
  }

  @media(min-width: 768px)
  {
    h1
    {
      font-size:2.1vw;
    }

    button.logout
    {
      font-size:1.8vw;
      width:12vw;
      height:4vw;
    }
  }

  @media(min-width: 992px)
  {
    h1
    {
      font-size:1.9vw;
    }

    button.logout
    {
      font-size:1.5vw;
      width:9vw;
      height:3vw;
    }
  }

  @media(min-width: 1200px)
  {
    h1
    {
      font-size:1.4vw;
    }

    button.logout
    {
      font-size:1.1vw;
      width:7.2vw;
      height:2.1vw;
    }
  }

  @media(min-width: 1600px)
  {
    h1
    {
      font-size:1.3vw;
    }

    button.logout
    {
      font-size:1vw;
      width:7vw;
      height:2vw;
    }
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:85%;
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

  }

  @media(min-width: 992px)
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

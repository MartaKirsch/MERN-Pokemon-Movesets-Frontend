import styled from 'styled-components';

const Wrapper = styled.div`

  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  div
  {
    border-radius:10px;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    div
    {
      font-size:1.4vw;
      padding:0.75vw 1.25vw;
      margin-bottom:1.25vw;
    }

    div:last-child
    {
      margin:0;
    }
  }

  @media(min-width: 1200px)
  {
    div
    {
      font-size:1.1vw;
      padding:.5vw 1vw;
      margin-bottom:1vw;
    }

    div:last-child
    {
      margin:0;
    }
  }

  @media(min-width: 1600px)
  {
    div
    {
      font-size:1vw;
      padding:.5vw 1vw;
      margin-bottom:1vw;
    }

    div:last-child
    {
      margin:0;
    }
  }
`;

export default Wrapper;

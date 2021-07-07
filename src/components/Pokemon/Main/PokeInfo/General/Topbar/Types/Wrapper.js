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
    div
    {
      font-size:3vw;
      padding:2vw 2.25vw;
      margin-bottom:2vw;
    }

    div:last-child
    {
      margin:0;
    }
  }

  @media(min-width: 576px)
  {
    div
    {
      font-size:1.9vw;
      padding:1.25vw 1.75vw;
      margin-bottom:2vw;
    }

    div:last-child
    {
      margin:0;
    }
  }

  @media(min-width: 768px)
  {
    div
    {
      font-size:1.7vw;
      padding:1vw 1.5vw;
      margin-bottom:2vw;
    }

    div:last-child
    {
      margin:0;
    }
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

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  justify-content:flex-start;
  align-items:center;



  @media(min-width: 200px)
  {
    padding: 8vw 6vw;
    flex-direction:column;

    .box
    {
      margin:0 0 6vw;
    }
    .box:nth-child(2)
    {
      margin:6vw 0;
    }
  }

  @media(min-width: 576px)
  {
    padding:6vw;
    flex-direction:row;

    .box
    {
      margin:0 4vw;
    }
    .box:nth-child(2)
    {
      margin:0 0 0 5vw;
    }
  }

  @media(min-width: 768px)
  {
    padding:5vw;

    .box
    {
      margin:0 4vw;
    }
    .box:nth-child(2)
    {
      margin:0 0 0 3.5vw;
    }
  }

  @media(min-width: 992px)
  {
    padding:5vw;

    .box
    {
      margin:0 3vw;
    }
    .box:nth-child(2)
    {
      margin:0 0 0 3.5vw;
    }
  }

  @media(min-width: 1200px)
  {
    padding:2.5vw;

    .box
    {
      margin:0 2vw;
    }
    .box:nth-child(2)
    {
      margin:0 0 0 2.5vw;
    }
  }

  @media(min-width: 1600px)
  {
    padding:2vw;

    .box
    {
      margin:0 2vw;
    }
    .box:nth-child(2)
    {
      margin:0 0 0 2vw;
    }
  }
`;

export default Wrapper;

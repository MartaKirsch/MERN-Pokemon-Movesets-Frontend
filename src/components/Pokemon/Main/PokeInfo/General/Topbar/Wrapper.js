import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  justify-content:flex-start;
  align-items:center;



  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {

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

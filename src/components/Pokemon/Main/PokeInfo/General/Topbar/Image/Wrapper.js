import styled from 'styled-components';

const Wrapper = styled.div`

  background-color: white;
  display: flex;
  justify-content:center;
  align-items:center;

  img
  {
    width:8vw;
    height:8vw;
    border-radius:15px;
    border: 2px dashed var(--pistachio);
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {

  }

  @media(min-width: 1200px)
  {
    width:11vw;
    height:11vw;
    border-radius:15px;

    img
    {
      width:9vw;
      height:9vw;
      border-radius:15px;
      border: 2px dashed var(--pistachio);
    }
  }

  @media(min-width: 1600px)
  {
    width:10vw;
    height:10vw;

    img
    {
      width:8vw;
      height:8vw;
    }
  }
`;

export default Wrapper;

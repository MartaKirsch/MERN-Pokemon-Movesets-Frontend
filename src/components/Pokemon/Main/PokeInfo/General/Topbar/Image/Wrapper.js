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

  @media(min-width: 768px)
  {
    width:21vw;
    height:21vw;
    border-radius:15px;

    img
    {
      width:17vw;
      height:17vw;
      border-radius:15px;
      border: 2px dashed var(--pistachio);
    }
  }

  @media(min-width: 992px)
  {
    width:15vw;
    height:15vw;
    border-radius:15px;

    img
    {
      width:12vw;
      height:12vw;
      border-radius:15px;
      border: 2px dashed var(--pistachio);
    }
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

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:15%;
  display:flex;
  justify-content: ${({isMoveset})=> isMoveset ? "center" : "space-between"};
  align-items:center;
  color:white;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 576px)
  {
    font-size:3.5vw;
  }

  @media(min-width: 768px)
  {
    font-size:3.5vw;
  }

  @media(min-width: 992px)
  {
    font-size:2.8vw;
  }

  @media(min-width: 1200px)
  {
    font-size:2.3vw;
  }

  @media(min-width: 1600px)
  {
    font-size:2vw;
  }
`;

export default Wrapper;

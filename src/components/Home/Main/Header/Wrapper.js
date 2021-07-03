import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 576px)
  {
    font-size:3.5vw;
    height:15%;
  }

  @media(min-width: 768px)
  {
    font-size:3.2vw;
    height:15%;
  }

  @media(min-width: 992px)
  {
    font-size:2.8vw;
    height:15%;
  }

  @media(min-width: 1200px)
  {
    font-size:2.3vw;
    height:15%;
  }

  @media(min-width: 1600px)
  {
    font-size:2vw;
    height:15%;
  }
`;

export default Wrapper;

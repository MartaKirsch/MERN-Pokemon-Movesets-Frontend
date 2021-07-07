import styled from 'styled-components';

const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;

  @media(min-width: 200px)
  {
    font-size:4vw;
    margin: 0 0 0 3vw;
  }

  @media(min-width: 576px)
  {
    font-size:2.4vw;
    margin: 0 0 0 1vw;
  }

  @media(min-width: 768px)
  {
    font-size:2.2vw;
  }

  @media(min-width: 992px)
  {
    font-size:1.8vw;
  }

  @media(min-width: 1200px)
  {
    font-size:1.4vw;
  }

  @media(min-width: 1600px)
  {
    font-size:1.4vw;
  }
`;

export default Info;

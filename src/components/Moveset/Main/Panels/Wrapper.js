import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;

  @media(min-width: 200px)
  {
    flex-direction:column;
    align-items: center;
  }

  @media(min-width: 768px)
  {
    margin:2.5vw 0;
  }

  @media(min-width: 992px)
  {
    justify-content: space-around;
    align-items: normal;
    flex-direction:row;
    margin:2.5vw 0;
  }

  @media(min-width: 1200px)
  {
    margin:2.5vw 0;
  }

  @media(min-width: 1600px)
  {
    margin:2vw 0;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 768px)
  {
    margin:6vw 0 0;
  }

  @media(min-width: 992px)
  {
    margin:5vw 0 0;
  }

  @media(min-width: 1200px)
  {
    margin:5vw 0 0;
  }

  @media(min-width: 1600px)
  {
    margin:2vw 0 0;
  }
`;

export default Wrapper;

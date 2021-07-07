import styled from 'styled-components';

const Wrapper = styled.nav`

  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-end;

  @media(min-width: 200px)
  {
    height:10%;
    padding:0 10vw;
  }

  @media(min-width: 576px)
  {
    height:15%;
    padding:0 8vw;
  }

  @media(min-width: 768px)
  {
    padding:0 6vw;
  }

  @media(min-width: 992px)
  {
    height:12%;
    padding:0 4vw;
  }

  @media(min-width: 1600px)
  {
    height:10%;
  }
`;

export default Wrapper;

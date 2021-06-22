import styled from 'styled-components';

const Wrapper = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    width:50%;
  }

  @media(min-width: 1200px)
  {
    width:40%;
  }

  @media(min-width: 1600px)
  {
    width:30%;
  }
`;

export default Wrapper;

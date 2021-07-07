import styled from 'styled-components';

const Wrapper = styled.div`

  height:100%;
  display:flex;
  flex-direction:column;

  @media(min-width: 200px)
  {
    width:100%;
  }

  @media(min-width: 1200px)
  {
    width:70%;
  }
`;

export default Wrapper;

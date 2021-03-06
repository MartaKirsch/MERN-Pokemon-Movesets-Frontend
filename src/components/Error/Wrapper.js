import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  display: ${({display}) => display==="true" ? "flex" : "none"};
  margin: 2vw 0 1vw;

  svg
  {
    height: ${({isInHints})=> isInHints==="false" ? `3.5vw` : `2.5vw`};
    width:auto;
  }
`;

export default Wrapper;

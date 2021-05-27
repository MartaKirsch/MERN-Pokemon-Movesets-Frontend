import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height: ${({userAccount}) => userAccount==="true" ? "100%" : "90%"};
  display:flex;
  justify-content:center;
`;

export default Wrapper;

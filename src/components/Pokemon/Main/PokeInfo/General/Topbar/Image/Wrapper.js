import styled from 'styled-components';

const Wrapper = styled.div`

  width:10vw;
  height:10vw;
  border-radius:15px;
  background-color: white;
  display: flex;
  justify-content:center;
  align-items:center;

  img
  {
    width:8vw;
    height:8vw;
    border-radius:15px;
    border: 2px dashed var(--pistachio);
  }
`;

export default Wrapper;

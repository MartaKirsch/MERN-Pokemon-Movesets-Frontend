import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  padding:2vw;
  justify-content:flex-start;

  .box
  {
    margin:0 2vw;
  }
  .box:nth-child(2)
  {
    margin:0 2vw 0 1vw;
  }
`;

export default Wrapper;

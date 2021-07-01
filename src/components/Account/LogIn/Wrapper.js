import styled from 'styled-components';

const Wrapper = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  overflow-y:auto;

  scrollbar-color: #7D8D9C transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
   width: 0.5vw;
  }

  /* &::-webkit-scrollbar-track {
   background: #adeec2;
  } */

  &::-webkit-scrollbar-thumb {
   background: #7D8D9C;
  }

  &::-webkit-scrollbar-thumb:hover {
   background: #6c7c8b;
  }
`;

export default Wrapper;

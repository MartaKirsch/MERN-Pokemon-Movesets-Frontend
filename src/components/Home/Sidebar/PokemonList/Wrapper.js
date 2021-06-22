import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:85%;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-y:auto;

  ul
  {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

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

  h2
  {
    color:white;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  overflow-y:auto;
  scrollbar-color: #7D8D9C transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
   width: 0.5vw;
  }

  &::-webkit-scrollbar-track {
   background: transparent;
  }

  &::-webkit-scrollbar-thumb {
   background: #7D8D9C;
  }

  &::-webkit-scrollbar-thumb:hover {
   background: #6c7c8b;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    padding: 0 0 8vw;
  }

  @media(min-width: 1200px)
  {
    padding: 0 0 5vw;
  }

  @media(min-width: 1600px)
  {
    padding: 0 0 2vw;
  }
`;

export default Wrapper;

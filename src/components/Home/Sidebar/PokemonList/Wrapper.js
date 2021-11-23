import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  scrollbar-color: #7d8d9c transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  /* &::-webkit-scrollbar-track {
   background: #adeec2;
  } */

  &::-webkit-scrollbar-thumb {
    background: #7d8d9c;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6c7c8b;
  }

  h2 {
    color: white;
  }

  @media (min-width: 200px) {
    height: 90%;
  }

  @media (min-width: 576px) {
    height: 85%;
  }
`;

export default Wrapper;

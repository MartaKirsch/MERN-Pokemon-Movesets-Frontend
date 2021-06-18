import styled from 'styled-components';

const Wrapper = styled.form`

  display:flex;
  flex-direction:column;
  align-items:center;
  height:100%;
  width:100%;
  overflow-y:auto;

  scrollbar-color: #7D8D9C transparent;

  &::-webkit-scrollbar {
   width: 0.8vw;
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

  }

  @media(min-width: 1200px)
  {

  }

  @media(min-width: 1600px)
  {

  }
`;

export default Wrapper;

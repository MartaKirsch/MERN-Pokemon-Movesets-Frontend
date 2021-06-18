import styled from 'styled-components';

const Wrapper = styled.div`

  display: flex;
  flex-direction:column;
  background-color:white;
  border-radius:15px;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {

  }

  @media(min-width: 1200px)
  {
    padding:2.5vw;
    margin:2.5vw 0 2.5vw;
    width:90%;
  }

  @media(min-width: 1600px)
  {
    padding:2vw;
    margin:2vw 0 0;
  }
`;

export default Wrapper;

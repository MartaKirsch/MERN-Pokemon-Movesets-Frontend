import styled from 'styled-components';

const Panel = styled.div`

  background-color:white;
  border-radius:15px;
  display:flex;
  flex-direction:column;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    width:42%;
    padding:2vw;
  }

  @media(min-width: 1200px)
  {
    width:42%;
    padding:2vw;
  }

  @media(min-width: 1600px)
  {
    width:45%;
    padding:2vw;
  }
`;

export default Panel;

import styled from 'styled-components';

const Panel = styled.div`

  background-color:white;
  border-radius:15px;
  display:flex;
  flex-direction:column;

  @media(min-width: 200px)
  {
    &:first-child
    {
      margin: 0 0 10vw 0;
    }

    width:88%;
    padding:6vw;
  }

  @media(min-width: 576px)
  {
    &:first-child
    {
      margin: 0 0 8vw 0;
    }

    width:88%;
    padding:6vw;
  }

  @media(min-width: 768px)
  {
    &:first-child
    {
      margin: 0 0 5vw 0;
    }

    width:75%;
    padding:4vw;
  }

  @media(min-width: 992px)
  {
    &:first-child
    {
      margin: 0;
    }

    width:42%;
    padding:2.5vw;
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

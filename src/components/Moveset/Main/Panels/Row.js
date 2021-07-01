import styled from 'styled-components';

const Row = styled.div`

  display:flex;
  justify-content:space-between;
  align-items:center;

  div:first-child
  {
    color:var(--red);
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    margin: 1.5vw 0;

    &:last-child
    {
      margin: 1.5vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 1.5vw 0;
    }

    div:first-child
    {
      font-size:1.35vw;
    }

    div:last-child
    {
      font-size:1.15vw;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 1.5vw 0;

    &:last-child
    {
      margin: 1.5vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 1.5vw 0;
    }

    div:first-child
    {
      font-size:1.35vw;
    }

    div:last-child
    {
      font-size:1.15vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 1.25vw 0;

    &:last-child
    {
      margin: 1.25vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 1.25vw 0;
    }

    div:first-child
    {
      font-size:1.2vw;
      color:var(--red);
    }

    div:last-child
    {
      font-size:1vw;
    }
  }
`;

export default Row;

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
    margin: 5vw 0;

    &:last-child
    {
      margin: 5vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 5vw 0;
    }

    div:first-child
    {
      font-size:3.8vw;
    }

    div:last-child
    {
      font-size:3.6vw;
    }
  }

  @media(min-width: 576px)
  {
    margin: 4vw 0;

    &:last-child
    {
      margin: 4vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 4vw 0;
    }

    div:first-child
    {
      font-size:2.4vw;
    }

    div:last-child
    {
      font-size:2.2vw;
    }
  }

  @media(min-width: 768px)
  {
    margin: 3vw 0;

    &:last-child
    {
      margin: 3vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 3vw 0;
    }

    div:first-child
    {
      font-size:2vw;
    }

    div:last-child
    {
      font-size:1.8vw;
    }
  }

  @media(min-width: 992px)
  {
    margin: 2vw 0;

    &:last-child
    {
      margin: 2vw 0 0 0;
    }

    &:first-child
    {
      margin: 0 0 2vw 0;
    }

    div:first-child
    {
      font-size:1.65vw;
    }

    div:last-child
    {
      font-size:1.45vw;
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

import styled from 'styled-components';

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .author
  {
    color: var(--medGrey);
    font-style: italic;
  }


  @media(min-width: 200px)
  {
    font-size: 4.2vw;
    margin:0;

    .author
    {
      font-size: 3.8vw;
      margin: 3vw 0 0 ;
    }
  }

  @media(min-width: 576px)
  {
    font-size: 2.6vw;
    margin:0 6vw 0 auto;

    .author
    {
      font-size: 2.2vw;
      margin: 2vw 0 0 ;
    }
  }

  @media(min-width: 768px)
  {
    font-size: 2.2vw;
    margin:0 4vw 0 auto;

    .author
    {
      font-size: 1.8vw;
      margin: 1.5vw 0 0 ;
    }
  }

  @media(min-width: 992px)
  {
    font-size: 2.2vw;
    margin:0 4vw 0 auto;

    .author
    {
      font-size: 1.8vw;
      margin: 1.5vw 0 0 ;
    }
  }

  @media(min-width: 1200px)
  {
    font-size: 1.6vw;
    margin:0 4vw 0 auto;

    .author
    {
      font-size: 1.1vw;
      margin: 1.5vw 0 0 ;
    }
  }

  @media(min-width: 1600px)
  {
    font-size: 1.4vw;
    margin:0 4vw 0 auto;

    .author
    {
      font-size: 1vw;
      margin: 1.5vw 0 0 ;
    }
  }
`;

export default AuthorWrapper;

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

  }

  @media(min-width: 992px)
  {

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

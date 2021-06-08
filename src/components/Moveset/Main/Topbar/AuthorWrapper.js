import styled from 'styled-components';

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4vw;
  margin:0 4vw 0 auto;

  .author
  {
    color: var(--medGrey);
    font-style: italic;
    font-size: 1vw;
    margin: 1.5vw 0 0 ;
  }
`;

export default AuthorWrapper;

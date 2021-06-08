import styled from 'styled-components';

const Row = styled.div`

  display:flex;
  justify-content:space-between;
  align-items:center;

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
`;

export default Row;

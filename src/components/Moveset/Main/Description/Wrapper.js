import styled from 'styled-components';

const Wrapper = styled.div`

  width:90%;
  margin: 2vw 0;

  .label
  {
    color:var(--red);
    font-size:1.2vw;
    text-transform:uppercase;
    margin: 0 0 1vw;
  }

  .content
  {
    font-size:1vw;
    padding:1.5vw;
    background-color:white;
    text-align:justify;
    border-radius:15px;
  }
`;

export default Wrapper;

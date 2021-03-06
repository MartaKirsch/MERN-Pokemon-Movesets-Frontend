import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  height:85%;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-y:auto;
  background-color:var(--grey);
  color:black;

  button.logout
  {
    color:black;
    background-color: var(--pistachio);
    border-radius:15px;
    font-size:1vw;
    width:7vw;
    height:2vw;
  }

  h1
  {
    font-size:1.3vw;
    font-weight:normal;

  }
`;

export default Wrapper;

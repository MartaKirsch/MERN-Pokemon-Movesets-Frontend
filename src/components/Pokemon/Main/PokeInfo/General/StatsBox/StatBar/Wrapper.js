import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  padding:1vw 0;
  border-bottom:1px solid var(--pistachio);
  font-size:1vw;
  color:black;

  &:first-child{
    padding: 0 0 1vw 0;
  }
  &:last-child{
    padding: 1vw 0 0 0;
    border:none;
  }

  div
  {
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
  }

  .stat{
    width:10%;
    justify-content:flex-end;
  }

  .value,.min,.max{
    width:12%;
  }

  .bar-wrapper{
    width:54%;
    justify-content:flex-start;
  }

  .bar{
    background-color:var(--yellow);
    border-radius:15px;
    height:60%;
    width: ${({percent})=>percent}% ;
  }
`;

export default Wrapper;

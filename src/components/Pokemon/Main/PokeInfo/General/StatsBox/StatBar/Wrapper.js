import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  border-bottom:1px solid var(--pistachio);
  color:black;

  &:last-child{
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
    width: ${({percent})=>percent}% ;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    font-size:1.6vw;
    padding:2vw 0;

    &:first-child{
      padding: 0 0 2vw 0;
    }

    &:last-child{
      padding: 2vw 0 0 0;
    }

    .bar{
      height:70%;
    }
  }

  @media(min-width: 1200px)
  {
    font-size:1.2vw;
    padding:1.25vw 0;

    &:first-child{
      padding: 0 0 1.25vw 0;
    }

    &:last-child{
      padding: 1.25vw 0 0 0;
    }

    .bar{
      height:65%;
    }
  }

  @media(min-width: 1600px)
  {
    font-size:1vw;
    padding:1vw 0;

    &:first-child{
      padding: 0 0 1vw 0;
    }

    &:last-child{
      padding: 1vw 0 0 0;
    }

    .bar{
      height:60%;
    }
  }
`;

export default Wrapper;

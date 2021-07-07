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
    justify-content:flex-end;
  }

  .bar-wrapper{
    justify-content:flex-start;
  }

  .bar{
    background-color:var(--yellow);
    border-radius:15px;
    width: ${({percent})=>percent}% ;
  }

  @media(min-width: 200px)
  {
    .stat{
      width:20%;
    }

    .value,.min,.max{
      width:14%;
    }

    .bar-wrapper{
      width:38%;
    }

    font-size:3.8vw;
    padding:5vw 0;

    &:first-child{
      padding: 0 0 5vw 0;
    }

    &:last-child{
      padding: 5vw 0 0 0;
    }

    .bar{
      height:70%;
    }
  }

  @media(min-width: 576px)
  {
    .stat{
      width:12%;
    }

    .value,.min,.max{
      width:12%;
    }

    .bar-wrapper{
      width:52%;
    }

    font-size:2.2vw;
    padding:3vw 0;

    &:first-child{
      padding: 0 0 3vw 0;
    }

    &:last-child{
      padding: 3vw 0 0 0;
    }

    .bar{
      height:70%;
    }
  }

  @media(min-width: 768px)
  {
    .stat{
      width:10%;
    }

    .value,.min,.max{
      width:12%;
    }

    .bar-wrapper{
      width:54%;
    }

    font-size:2vw;
    padding:2.5vw 0;

    &:first-child{
      padding: 0 0 2.5vw 0;
    }

    &:last-child{
      padding: 2.5vw 0 0 0;
    }

    .bar{
      height:70%;
    }
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

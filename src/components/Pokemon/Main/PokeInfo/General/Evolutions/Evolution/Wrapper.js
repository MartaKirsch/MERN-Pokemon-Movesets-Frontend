import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  align-items:center;
  justify-content:center;

  &:last-child{
    margin-bottom:0;
  }

  &:first-child{
    margin-top:0;
  }

  .arrowBox{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
  }

  a{
    display:flex;
    align-items:center;
    justify-content:center;
    transition: transform 0.3s ease-out;
  }

  a:focus{
    transform:scale(0.8);
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 576px)
  {
    margin: 5vw;

    .arrowBox{
      font-size:2vw;
    }

    svg{
      width:10vw;
    }

    img{
      width:13vw;
      height:13vw;
    }

    a, .arrowBox{
      margin:0 3vw;
    }
  }

  @media(min-width: 768px)
  {
    margin: 4vw;

    .arrowBox{
      font-size:1.8vw;
    }

    svg{
      width:8vw;
    }

    img{
      width:12vw;
      height:12vw;
    }

    a, .arrowBox{
      margin:0 2vw;
    }
  }

  @media(min-width: 992px)
  {
    margin: 3.5vw;

    .arrowBox{
      font-size:1.5vw;
    }

    svg{
      width:6vw;
    }

    img{
      width:8.5vw;
      height:8.5vw;
    }

    a, .arrowBox{
      margin:0 2vw;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 2vw;

    .arrowBox{
      font-size:1vw;
    }

    svg{
      width:4vw;
    }

    img{
      width:6.5vw;
      height:6.5vw;
    }

    a, .arrowBox{
      margin:0 1vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 1.5vw;

    .arrowBox{
      font-size:0.8vw;
    }

    svg{
      width:3vw;
    }

    img{
      width:5vw;
      height:5vw;
    }

    a, .arrowBox{
      margin:0 1vw;
    }
  }
`;

export default Wrapper;

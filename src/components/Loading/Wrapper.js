import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  display: ${({display}) => display==="true" ? "flex" : "none"};

  svg
  {
    width:auto;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    margin: 3vw 0 2vw;

    svg
    {
      height: ${({isInHints})=> isInHints==="false" ? `6vw` : `5.25vw`};
    }
  }

  @media(min-width: 1200px)
  {
    margin: 2vw 0 1vw;

    svg
    {
      height: ${({isInHints})=> isInHints==="false" ? `4vw` : `3.25vw`};
    }
  }

  @media(min-width: 1600px)
  {
    margin: 2vw 0 1vw;

    svg
    {
      height: ${({isInHints})=> isInHints==="false" ? `3.5vw` : `2.5vw`};
    }
  }
`;

export default Wrapper;

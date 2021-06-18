import styled from 'styled-components';

const Wrapper = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {

  }

  @media(min-width: 1200px)
  {
    svg
    {
      width:14vw;
      height:14vw;
    }

    button
    {
      margin: 3vw 0 0;
    }
  }

  @media(min-width: 1600px)
  {
    svg
    {
      width:12vw;
      height:12vw;
    }

    button
    {
      margin: 5vw 0 0;
    }
  }
`;

export default Wrapper;

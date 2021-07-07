import styled from 'styled-components';

const Wrapper = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 200px)
  {
    width:65%;
    svg
    {
      width:40vw;
      height:40vw;
    }

    button
    {
      margin: 8vw 0 0;
    }
  }

  @media(min-width: 576px)
  {
    width:60%;
    svg
    {
      width:22vw;
      height:22vw;
    }

    button
    {
      margin: 3vw 0 0;
    }
  }

  @media(min-width: 768px)
  {
    width:60%;
    svg
    {
      width:22vw;
      height:22vw;
    }

    button
    {
      margin: 3vw 0 0;
    }
  }

  @media(min-width: 992px)
  {
    width:50%;
    svg
    {
      width:18vw;
      height:18vw;
    }

    button
    {
      margin: 3vw 0 0;
    }
  }

  @media(min-width: 1200px)
  {
    width:50%;
    svg
    {
      width:14vw;
      height:14vw;
    }

    button
    {
      margin: 2vw 0 0;
    }
  }

  @media(min-width: 1600px)
  {
    width:40%;
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

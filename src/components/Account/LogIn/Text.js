import styled from 'styled-components';

const Wrapper = styled.button`
  color:white;
  cursor:pointer;
  text-align:center;

  &:hover,&:focus
  {
    text-decoration:underline;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    width:70%;
    font-size:1.6vw;
  }

  @media(min-width: 1200px)
  {
    width:70%;
    font-size:1.2vw;
  }

  @media(min-width: 1600px)
  {
    width:70%;
    font-size:1vw;
  }
`;

export default Wrapper;

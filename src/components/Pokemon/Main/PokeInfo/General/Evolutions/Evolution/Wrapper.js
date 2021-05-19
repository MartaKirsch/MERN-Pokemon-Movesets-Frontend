import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display: flex;
  align-items:center;
  justify-content:center;
  margin: 1.5vw;

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

  a{
    transition: transform 0.3s ease-out;
  }

  a:focus{
    transform:scale(0.8);
  }
`;

export default Wrapper;

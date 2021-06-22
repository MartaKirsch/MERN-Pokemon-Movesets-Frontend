import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  justify-content:center;

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "88%"};
  }

  @media(min-width: 1200px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "88%"};
  }

  @media(min-width: 1600px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "90%"};
  }
`;

export default Wrapper;

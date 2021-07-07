import styled from 'styled-components';

const Wrapper = styled.div`

  width:100%;
  display:flex;
  justify-content:center;
  position:relative;

  @media(min-width: 200px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "90%"};
  }

  @media(min-width: 576px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "85%"};
  }

  @media(min-width: 768px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "85%"};
  }

  @media(min-width: 992px) /*for 1200px the same*/
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "88%"};
  }

  @media(min-width: 1600px)
  {
    height: ${({userAccount}) => userAccount==="true" ? "100%" : "90%"};
  }
`;

export default Wrapper;

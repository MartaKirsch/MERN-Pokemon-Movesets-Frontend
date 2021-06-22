import styled from 'styled-components';

const Wrapper = styled.div`

  height:100%;
  display:flex;
  flex-direction:column;
  background-color:var(--red);


  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    width:45%;
    position:absolute;
    z-index:10;
    left:0;
    display: ${({showSidebar})=> showSidebar ? "block" : "none"} ;
  }

  @media(min-width: 1200px)
  {
    width:30%;
    display: block;
    position:static;
  }

  @media(min-width: 1600px)
  {

  }
`;

export default Wrapper;

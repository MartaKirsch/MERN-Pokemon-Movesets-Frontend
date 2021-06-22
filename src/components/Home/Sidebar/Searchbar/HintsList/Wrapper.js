import styled from 'styled-components';

const Wrapper = styled.ul`
  position:absolute;
  width:98%;
  display:flex;
  flex-direction:column;
  left:1%;
  z-index:2;
  background-color:var(--pistachio);
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
  overflow-y:auto;
  display: ${({display}) => display==="true" ? "block" : "none" };

  scrollbar-color: #7D8D9C #adeec2;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
   width: 0.5vw;
  }

  &::-webkit-scrollbar-track {
   background: #adeec2;
  }

  &::-webkit-scrollbar-thumb {
   background: #7D8D9C;
  }

  &::-webkit-scrollbar-thumb:hover {
   background: #6c7c8b;
  }

  li
  {
    width:100%;
  }

  a, button
  {
    color:black;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    position:relative;
    overflow:hidden;
    z-index:1;
  }

  a::after, button::after
  {
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:-100%;
    background-color:var(--pistachio_D);
    transition:transform 0.3s ease-out;
    z-index:-1;
  }

  a:hover::after, a:focus::after, button:hover::after, button:focus::after
  {
    transform:translateX(100%);
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    max-height:50vh;
    top:101%;

    li
    {
      height:7vw;
    }

    a, button
    {
      font-size:1.4vw;
      padding: 0 3vw;
    }
  }

  @media(min-width: 1200px)
  {
    max-height:50vh;
    top:101%;

    li
    {
      height:5vw;
    }

    a, button
    {
      font-size:1.15vw;
      padding: 0 2.1vw;
    }
  }

  @media(min-width: 1600px)
  {
    max-height:50vh;
    top:102%;

    li
    {
      height:5vw;
    }

    a, button
    {
      font-size:1vw;
      padding: 0 2vw;
    }
  }
`;

export default Wrapper;

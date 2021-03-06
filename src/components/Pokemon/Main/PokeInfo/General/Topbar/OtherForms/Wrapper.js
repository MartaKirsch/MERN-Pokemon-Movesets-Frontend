import styled from 'styled-components';

const Wrapper = styled.div`

  width: ${({mainForms})=>mainForms ? "18%" : "40%"};
  margin: ${({mainForms})=>mainForms ? "0" : "0 0 0 auto"};
  height:10vw;
  display: flex;
  flex-direction:column;
  overflow-y:auto;

  scrollbar-color: #7D8D9C transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
   width: 0.5vw;
  }

  &::-webkit-scrollbar-track {
   background: transparent;
  }

  &::-webkit-scrollbar-thumb {
   background: #7D8D9C;
  }

  &::-webkit-scrollbar-thumb:hover {
   background: #6c7c8b;
  }

  ul
  {
    display: flex;
    flex-direction:column;
  }

  button
  {
    width:100%;
    height:2.65vw;
    font-size:1.2vw;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    color:black;
    position: relative;
    z-index:1;
    margin: 0.5vw 0;
  }

  button:last-child
  {
    margin:0.5vw 0 0 0;
  }
  button:first-child
  {
    margin:0 0 0.5vw 0;
  }

  button:disabled
  {
    background-color:var(--grey_D);
  }

  button::before
  {
    transform: scaleX(0);
    transform-origin: bottom right;
    content: "";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color:var(--pistachio);
    z-index: -1;
    transition: transform .4s ease;
  }

  button:not([disabled]):hover::before,button:not([disabled]):focus::before
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  button.selected{
    background-color:var(--pistachio);
  }
`;

export default Wrapper;

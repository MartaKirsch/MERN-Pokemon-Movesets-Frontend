import styled from 'styled-components';

const Wrapper = styled.div`

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
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    color:black;
    position: relative;
    z-index:1;
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

  @media(min-width: 200px)
  {

  }

  @media(min-width: 768px)
  {
    width: 45%;
    margin:0 0 0 auto;
    height:21vw;

    button
    {
      height:5vw;
      font-size:2.2vw;
      margin: 1vw 0;
    }

    button:last-child
    {
      margin:0.5vw 0 0 0;
    }
    button:first-child
    {
      margin:0 0 0.5vw 0;
    }
  }

  @media(min-width: 992px)
  {
    width: 40%;
    margin:0 0 0 auto;
    height:15vw;

    button
    {
      height:4vw;
      font-size:1.6vw;
      margin: 0.6vw 0;
    }

    button:last-child
    {
      margin:0.5vw 0 0 0;
    }
    button:first-child
    {
      margin:0 0 0.5vw 0;
    }
  }

  @media(min-width: 1200px)
  {
    width: 40%;
    margin:0 0 0 auto;
    height:11vw;

    button
    {
      height:3vw;
      font-size:1.3vw;
      margin: 0.6vw 0;
    }

    button:last-child
    {
      margin:0.5vw 0 0 0;
    }
    button:first-child
    {
      margin:0 0 0.5vw 0;
    }
  }

  @media(min-width: 1600px)
  {
    width: 40%;
    margin: 0 0 0 auto;
    height:10vw;

    button
    {
      height:2.65vw;
      font-size:1.2vw;
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
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Buttons = styled.div`

  width:100%;
  display:flex;
  justify-content:center;

  button
  {
    display:flex;
    justify-content:center;
    align-items:center;
    width:48%;
    position:relative;
    z-index:1;
    overflow:hidden;
  }

  button.update
  {
    color:black;
    background-color:var(--pistachio);
    border-bottom-left-radius:15px;
  }

  button.delete
  {
    color:white;
    background-color:var(--error_red);
    border-bottom-right-radius:15px;
  }

  button::after
  {
    content:'';
    position:absolute;
    width:101%;
    height:100%;
    top: 0; right: 0; bottom: 0; left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    background-color: var(--blue);
    z-index:-1;
  }

  button:hover::after, button:focus::after
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media(min-width: 200px)
  {
    button
    {
      font-size:3.5vw;
      height:6.25vw;
    }
  }

  @media(min-width: 576px)
  {
    button
    {
      font-size:2vw;
      height:4.25vw;
    }
  }

  @media(min-width: 768px)
  {
    button
    {
      font-size:2vw;
      height:3.5vw;
    }
  }

  @media(min-width: 992px)
  {
    button
    {
      font-size:1.6vw;
      height:3vw;
    }
  }

  @media(min-width: 1200px)
  {
    button
    {
      font-size:1.2vw;
      height:2vw;
    }
  }

  @media(min-width: 1600px)
  {
    button
    {
      font-size:1vw;
      height:1.5vw;
    }
  }
`;

export default Buttons;

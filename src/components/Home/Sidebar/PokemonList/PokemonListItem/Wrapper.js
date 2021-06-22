import styled from 'styled-components';

const Wrapper = styled.li`

  width:80%;
  border-radius:15px;
  position:relative;
  display:flex;
  flex-direction:column;

  a, .messageWrapper
  {
    background-color:var(--grey);
    border-radius:15px;
    width:100%;
    height:100%;
    display:flex;
    align-items:space-between;
    position: relative;
    z-index:1;
    overflow:hidden;
  }

  a::before
  {
    transform: scaleX(0);
    transform-origin: bottom right;
    content: "";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #e3e3e3;
    z-index: -1;
    transition: transform .4s ease;
  }

  a:hover::before,a:focus::before
  {
    transform: scaleX(1);
    transform-origin: bottom left;
  }



  .line
  {
    position:absolute;
    width:96%;
    left:2%;
    bottom: -0.25vw ;
    height:6px;
    z-index:2;
    border-radius:15px;
    background-color:var(--blue);
    transform:scaleX(0);
    transition: transform .4s ease .2s;
    transform-origin: bottom right;
  }

  a:focus + .line, a:hover + .line
  {
    transform:scaleX(1);
    transform-origin: bottom left;
  }

  .pokename
  {
    color:var(--medGrey);
  }

  .imgWrapper
  {
    margin: auto 0 auto auto;
  }

  .imgWrapper img
  {
    width:100%;
    height:auto;
  }

  .messageWrapper
  {
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
  }

  .buttonsWrapper
  {
    display:flex;
    width:50%;
    justify-content:space-around;
  }

  button.no
  {
    color:black;
    background-color:var(--pistachio);
  }

  button.yes
  {
    color:white;
    background-color:var(--error_red);
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    height: ${({showUpdateDeleteBtns})=> showUpdateDeleteBtns ? "9.5vw" : "8vw"} ;
    margin: 1.25vw 0;

    a, .messageWrapper
    {
      padding:1vw;
    }

    img
    {
      height:5.75vw;
      width:5.75vw;
      margin: auto 0;
    }

    /* user account */
    .pokename
    {
      font-size:1.2vw;
    }

    .imgWrapper
    {
      width:2vw;
      height:2vw;
    }

    .messageWrapper
    {
      font-size:1.2vw;
    }

    .messageWrapper button
    {
      padding:0.5vw 1vw;
      font-size:1vw;
      border-radius:15px;
    }
  }

  @media(min-width: 1200px)
  {
    height: ${({showUpdateDeleteBtns})=> showUpdateDeleteBtns ? "9.5vw" : "8vw"} ;
    margin: 1.25vw 0;

    a, .messageWrapper
    {
      padding:1vw;
    }

    img
    {
      height:5.75vw;
      width:5.75vw;
      margin: auto 0;
    }

    /* user account */
    .pokename
    {
      font-size:1.2vw;
    }

    .imgWrapper
    {
      width:2vw;
      height:2vw;
    }

    .messageWrapper
    {
      font-size:1.2vw;
    }

    .messageWrapper button
    {
      padding:0.5vw 1vw;
      font-size:1vw;
      border-radius:15px;
    }
  }

  @media(min-width: 1600px)
  {
    height: ${({showUpdateDeleteBtns})=> showUpdateDeleteBtns ? "8.5vw" : "7vw"} ;
    margin: 1vw 0;

    a, .messageWrapper
    {
      padding:1vw;
    }

    img
    {
      height:5vw;
      width:5vw;
    }

    /* user account */
    .pokename
    {
      font-size:1.2vw;
    }

    .imgWrapper
    {
      width:2vw;
      height:2vw;
    }

    .messageWrapper
    {
      font-size:1vw;
    }

    .messageWrapper button
    {
      padding:0.5vw 1vw;
      font-size:0.8vw;
      border-radius:15px;
    }
  }
`;

export default Wrapper;

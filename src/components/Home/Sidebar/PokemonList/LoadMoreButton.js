import styled from 'styled-components';

const LoadMoreButton = styled.button`
  background-color:var(--pistachio);
  border-radius:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-shadow: 1px 1px 2px #CE5937,1px 1px 2px #CE5937,1px 1px 2px #CE5937,1px 1px 2px #CE5937;
  z-index:1;
  position:relative;

  &:disabled,
  &[disabled]{
    background-color: var(--grey);
  }

  &:disabled::after,
  &[disabled]::after{
    background-color: var(--grey_D);
  }

  &::after
  {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    transform:scale(0);
    transition:transform .15s ease-out;
    z-index:-1;
    background-color:var(--pistachio_D);
    border-radius:15px;
  }

  &:focus::after, &:hover::after
  {
    transform:scale(1);
  }

  @keyframes showbefore {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }

  &::before
  {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:-1;
    border-radius:15px;
    opacity:0;
    box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    -webkit-box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    -moz-box-shadow: 6px 5px 7px 0px rgba(45,45,45,0.75);
    animation-fill-mode: forwards;
  }

  &:focus::before, &:hover::before
  {
    animation: showbefore 0.1s 0.15s forwards;
    -moz-animation: showbefore 0.1s 0.15s forwards;
    -webkit-animation: showbefore 0.1s 0.15s forwards;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    font-size:1.6vw;
    padding: 1vw 0;
    width: ${({isForm}) => isForm ? "16%" : "70%"};
    margin: ${({isForm}) => isForm ? "0 0 5vw" : "2vw 0"};
  }

  @media(min-width: 1200px)
  {
    font-size:1.6vw;
    padding: 1vw 0;
    width: ${({isForm}) => isForm ? "16%" : "70%"};
    margin: ${({isForm}) => isForm ? "0 0 5vw" : "2vw 0"};
  }

  @media(min-width: 1600px)
  {
    font-size:1.5vw;
    padding: 1vw 0;
    width: ${({isForm}) => isForm ? "15%" : "70%"};
    margin:${({form}) => form==="true" ? "0 0 2vw" : "2vw 0"};
  }
`;

export default LoadMoreButton;

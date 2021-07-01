import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  flex-direction:column;
  align-items:center;

  label
  {
    color:white;
    position:relative;
  }

  label.sumErr:after
  {
    content:'The sum of EVs needs to be between 1 and 510';
    position:absolute;
    top:0;
    background-color:var(--grey);
    color:black;
    border-radius:15px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  @media(min-width: 200px)
  {

  }
  @media(min-width: 768px)
  {
    margin: 0 0 8vw 0;
    width:45vw;

    label
    {
      font-size:3.5vw;
      margin:0 0 2.25vw 0;
    }

    label.sumErr:after
    {
      font-size:2vw;
      left:9vw;
      width:40vw;
      height:140%;
    }
  }

  @media(min-width: 992px)
  {
    margin: 0 0 5vw 0;
    width:35vw;

    label
    {
      font-size:2.8vw;
      margin:0 0 2vw 0;
    }

    label.sumErr:after
    {
      font-size:1.5vw;
      left:9vw;
      width:38vw;
      height:100%;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 5vw 0;
    width:35vw;

    label
    {
      font-size:2.3vw;
      margin:0 0 1.5vw 0;
    }

    label.sumErr:after
    {
      font-size:1.2vw;
      left:7vw;
      width:30vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 4vw 0;
    width:30vw;

    label
    {
      font-size:2vw;
      margin:0 0 1vw 0;
    }

    label.sumErr:after
    {
      font-size:1vw;
      left:6vw;
      width:25vw;
    }
  }
`;

export default Wrapper;

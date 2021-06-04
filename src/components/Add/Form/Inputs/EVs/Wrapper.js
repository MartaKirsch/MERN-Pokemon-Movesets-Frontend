import styled from 'styled-components';

const Wrapper = styled.div`

  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 0 0 4vw 0;
  width:30vw;

  label
  {
    font-size:2vw;
    color:white;
    margin:0 0 1vw 0;
    position:relative;
  }

  label.sumErr:after
  {
    content:'The sum of EVs needs to be between 1 and 510';
    font-size:1vw;
    position:absolute;
    left:6vw; top:0;
    background-color:var(--grey);
    color:black;
    border-radius:15px;
    width:25vw;
    height:100%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
  }

`;

export default Wrapper;

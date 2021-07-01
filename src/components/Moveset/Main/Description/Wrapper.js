import styled from 'styled-components';

const Wrapper = styled.div`

  .label
  {
    color:var(--red);
    text-transform:uppercase;
  }

  .content
  {
    background-color:white;
    text-align:justify;
    border-radius:15px;
  }

  @media(min-width: 200px)
  {

  }

  @media(min-width: 992px)
  {
    width:90%;
    margin: 2.5vw 0 5vw;

    .label
    {
      font-size:1.35vw;
      margin: 0 0 1.5vw;
    }

    .content
    {
      font-size:1.15vw;
      padding:2vw;
    }
  }

  @media(min-width: 1200px)
  {
    width:90%;
    margin: 2.5vw 0 5vw;

    .label
    {
      font-size:1.35vw;
      margin: 0 0 1.5vw;
    }

    .content
    {
      font-size:1.15vw;
      padding:2vw;
    }
  }

  @media(min-width: 1600px)
  {
    width:90%;
    margin: 2vw 0;

    .label
    {
      font-size:1.2vw;
      margin: 0 0 1vw;
    }

    .content
    {
      font-size:1vw;
      padding:1.5vw;
    }
  }
`;

export default Wrapper;

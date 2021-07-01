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

  @media(min-width: 768px)
  {
    width:75%;
    margin: 5vw 0 7.5vw;

    .label
    {
      font-size:2vw;
      margin: 0 0 2vw;
    }

    .content
    {
      font-size:1.8vw;
      padding:4vw;
    }
  }

  @media(min-width: 992px)
  {
    width:90%;
    margin: 5vw 0 7.5vw;

    .label
    {
      font-size:1.65vw;
      margin: 0 0 1.5vw;
    }

    .content
    {
      font-size:1.45vw;
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

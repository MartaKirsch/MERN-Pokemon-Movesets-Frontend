import Wrapper from 'components/Navbar/Button/Wrapper';
import resolveStringToImg from 'utils/resolveStringToImg';

const Button = ({img,color}) => {
  return(
    <Wrapper color={color}>
      <img src={resolveStringToImg(img)} alt=""/>
    </Wrapper>
  )
};

export default Button;

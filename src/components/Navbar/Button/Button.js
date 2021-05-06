import Wrapper from 'components/Navbar/Button/Wrapper';
import resolveStringToImg from 'utils/resolveStringToImg';
import { Link } from 'react-router-dom';

const Button = ({img,color,url}) => {
  return(
    <Wrapper color={color}>
      <Link to={url}>
        <img src={resolveStringToImg(img)} alt=""/>
      </Link>
    </Wrapper>
  )
};

export default Button;

import Wrapper from 'components/Error/Wrapper';
import {ReactComponent as Pokeballs} from 'imgs/error.svg';

const Error = ({display,isInHints}) => {

  return(
    <Wrapper display={display}>
      <Pokeballs/>
    </Wrapper>
  )
};

Error.defaultProps = {
  isInHints: 'false'
};

export default Error;

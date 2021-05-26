import { useRef } from 'react';
import { ReactComponent as Ball } from 'imgs/login-icon.svg';
import gsap from 'gsap';

const Button = () => {

  const ref = useRef();

  const handleShrink = () => {
    const ball = ref.current.querySelector('#ball');
    gsap.to(ball,{duration:0.3, scale:0.8, transformOrigin:"50% 50%"});
  };

  const handleGrow = () => {
    const ball = ref.current.querySelector('#ball');
    gsap.to(ball,{duration:0.3, scale:1, transformOrigin:"50% 50%"});
  };

  return(
    <button
    onMouseEnter={handleShrink}
    onFocus={handleShrink}
    onMouseLeave={handleGrow}
    onBlur={handleGrow}
    >
      <Ball ref={ref}/>
    </button>
  )
};

export default Button;

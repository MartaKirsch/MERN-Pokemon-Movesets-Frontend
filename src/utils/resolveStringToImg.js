import home from 'imgs/home.svg';
import add from 'imgs/add.svg';
import user from 'imgs/user.svg';

const resolveStringToImg = (name) => {
  const imgs = {
    home,
    add,
    user
  };

  return imgs[name];
};

export default resolveStringToImg;

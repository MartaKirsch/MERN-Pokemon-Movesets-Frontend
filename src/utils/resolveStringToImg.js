import home from 'imgs/home.svg';
import add from 'imgs/add.svg';
import user from 'imgs/user.svg';
import menu from 'imgs/menu.svg';

const resolveStringToImg = (name) => {
  const imgs = {
    home,
    add,
    user,
    menu
  };

  return imgs[name];
};

export default resolveStringToImg;

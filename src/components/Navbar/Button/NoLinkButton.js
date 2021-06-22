import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShowSidebarContext from 'components/ShowSidebarContext';
import Wrapper from 'components/Navbar/Button/Wrapper';
import resolveStringToImg from 'utils/resolveStringToImg';

const NoLinkButton = ({img,color}) => {

  const { showSidebar, setShowSidebar } = useContext(ShowSidebarContext);

  return(
    <Wrapper color={color} className="menu">
      <button onClick={e=>setShowSidebar(!showSidebar)} className="menu">
        <img src={resolveStringToImg(img)} alt="" className="menu"/>
      </button>
    </Wrapper>
  )
};

export default NoLinkButton;

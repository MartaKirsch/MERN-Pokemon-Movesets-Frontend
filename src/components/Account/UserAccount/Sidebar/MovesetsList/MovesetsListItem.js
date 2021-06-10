import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Wrapper from 'components/Home/Sidebar/PokemonList/PokemonListItem/Wrapper';
import Info from 'components/Home/Sidebar/PokemonList/PokemonListItem/Info';
import Buttons from 'components/Account/UserAccount/Sidebar/MovesetsList/Buttons';

const MovesetsListItem = ({url,pokemon,name,id}) => {

  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);

  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`moveset/${id}`).then(res=>{

      if(res.statusText!=="OK")
        throw new Error('error happened!');

      if(res.data.deleted)
        history.go(0);
      else
        setDeleteMessageVisible(false);
    })
    .catch(err=>{
      setDeleteMessageVisible(false);
    })
  };

  return(
    <Wrapper showUpdateDeleteBtns={true}>
      {!deleteMessageVisible &&
        <Link to={`/moveset/${pokemon}/${id}`}>
          <img src={url} alt=""/>

            <Info>
              <div className="movesetName">{name}</div>
              <div className="pokename">
                {pokemon}
              </div>
            </Info>

          <div className="imgWrapper"></div>
        </Link>
      }

      {deleteMessageVisible &&
        <div className="messageWrapper">
          <div>Are you sure you want to delete this moveset?</div>
          <div className="buttonsWrapper">
            <button className="yes" onClick={handleDelete}>Yes</button>
            <button className="no" onClick={e=>setDeleteMessageVisible(false)}>No</button>
          </div>
        </div>
      }
      <Buttons>
        <button className="update" onClick={e=>history.push(`/moveset/update/${id}`)}>Update</button>
        <button
        className="delete"
        onClick={e=>setDeleteMessageVisible(true)}>
          Delete
        </button>
      </Buttons>

    </Wrapper>
  )
};

MovesetsListItem.defaultProps = {
  showUpdateDeleteBtns: false
};

export default MovesetsListItem;

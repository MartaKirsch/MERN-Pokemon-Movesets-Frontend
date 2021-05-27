import Wrapper from 'components/Home/Wrapper';
import Sidebar from 'components/Account/UserAccount/Sidebar/Sidebar';
import Main from 'components/Account/UserAccount/Main/Main';

const UserAccount = () => {
  return(
    <Wrapper userAccount="true">
      <Sidebar/>
      <Main/>
    </Wrapper>
  )
};

export default UserAccount;

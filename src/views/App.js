import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowSidebarContext from 'components/ShowSidebarContext';
import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Navbar from 'views/Navbar';
import Home from 'views/Home';
import Pokemon from 'views/Pokemon';
import Moveset from 'views/Moveset';
import Account from 'views/Account';
import Add from 'views/Add';
import UpdateMoveset from 'views/UpdateMoveset';


function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const values = {showSidebar, setShowSidebar};

  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Wrapper>
          <ShowSidebarContext.Provider value={values}>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/add" component={Add}/>
              <Route path="/account" component={Account}/>
              <Route path="/moveset/update/:id" component={UpdateMoveset}/>
              <Route path="/pokemon/:name" component={Pokemon}/>
              <Route path="/moveset/:name/:id" component={Moveset}/>
            </Switch>
          </ShowSidebarContext.Provider>
        </Wrapper>
      </BrowserRouter>

    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Navbar from 'views/Navbar';
import Home from 'views/Home';
import Pokemon from 'views/Pokemon';
import Account from 'views/Account';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Wrapper>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/add"><h1>add</h1></Route>
            <Route path="/account" component={Account}/>
            <Route path="/pokemon/:name" component={Pokemon}/>
            <Route path="/moveset/:name"><Pokemon isMoveset={true}/></Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>

    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Navbar from 'views/Navbar';
import Home from 'views/Home';


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
            <Route path="/account"><h1>account</h1></Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>

    </div>
  );
}

export default App;

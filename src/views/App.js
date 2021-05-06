import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Navbar from 'views/Navbar';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>

      <Wrapper>
        <Navbar/>
        <h1>hemlo C:</h1>
      </Wrapper>
    </div>
  );
}

export default App;

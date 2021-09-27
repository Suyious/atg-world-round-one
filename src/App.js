import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from "./Components/NavBar/MainNavBar"
import Header from "./Components/Header/Header"
import Body from './Components/Body/Body';
import Posts from './Components/Body/Posts/Posts';

function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <Header/>
      <Body>
        <Posts/>
      </Body>
    </div>
  );
}

export default App;

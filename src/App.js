import './assets/styles/App.css';
import Header from './components/share-component/Header';
import Login from './components/pages/Login';
import LoginTwo from './components/pages/LoginTwo'
import LoginThree from './components/pages/LoginThree';


function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      {/* <LoginTwo/> */}
      {/* <LoginThree/> */}
    </div>
  );
}

export default App;

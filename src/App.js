import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Home />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from './Greeting';

function App() {
  
  return (
    <div>
    <h1>Hello from React Js</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
    </div>
  );
}

export default App;

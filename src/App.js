import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Friends></Friends>
    </div>
  );
}

export default App;

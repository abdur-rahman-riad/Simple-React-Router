import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>

          <Route path="/user/:userId">
            <UserDetails></UserDetails>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import About from './component/Home/AboutUs/About';
import Footer from './component/Home/Footer/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/about">
            <About></About>
        </Route>

        </Switch>
      </Router>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;

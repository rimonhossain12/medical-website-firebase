import './App.css';
import About from './component/Home/AboutUs/About';
import Footer from './component/Home/Footer/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home';
import MedicalService from './component/Home/MedicalService/MedicalService';

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
          <Route path="/service">
            <MedicalService></MedicalService>
          </Route>
        
        </Switch>
      </Router>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;

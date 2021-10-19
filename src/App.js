import './App.css';
import About from './component/Home/AboutUs/About';
// import Footer from './component/Home/Footer/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home';
import MedicalService from './component/Home/MedicalService/MedicalService';
import Doctor from './component/Home/Doctor/Doctor';
import NotFound from './component/shared/NotFound/NotFound';
import Clients from './component/Home/Clients/Clients';
// import Address from './component/Home/Address/Address';

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
          <Route path="/doctor">
            <Doctor></Doctor>
        </Route>
          <Route path="/client">
          <Clients></Clients>
          </Route>

        {/* <Route path="*">
          <NotFound></NotFound>
        </Route> */}

        </Switch>
      </Router>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;

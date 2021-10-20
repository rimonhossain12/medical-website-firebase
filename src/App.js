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
import Login from './component/shared/Login/Login';

import Register from './component/shared/Register/Register';
import Contact from './component/Home/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


function App() {

  return (
    <div className="App">

    <AuthProvider>
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
            <PrivateRoute path="/service">
            <MedicalService></MedicalService>
            </PrivateRoute>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="/client">
            <Clients></Clients>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>


    </div>
  );
}

export default App;

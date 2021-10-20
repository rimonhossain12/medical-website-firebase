import './App.css';
import About from './component/Home/AboutUs/About';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Doctor from './component/Home/Doctor/Doctor';
import NotFound from './component/shared/NotFound/NotFound';
import Clients from './component/Home/Clients/Clients';
import Login from './component/shared/Login/Login';
import Register from './component/shared/Register/Register';
import Contact from './component/Home/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import Service from './component/Home/Service/Service';
import Booking from './component/Home/Booking/Booking';
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
              <Service></Service>
            </PrivateRoute>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
           
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
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;

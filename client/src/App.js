import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./pages/private-route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SingleVendor from "./pages/SingleVendor";
import Error from "./pages/Error";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Topbar/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vendors/" component={Vendors} />
          <Route exact path="/register/" component={Register} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route exact path="/vendor/:slug" component={SingleVendor} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  
  );
}

export default App;

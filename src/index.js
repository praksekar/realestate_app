import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Testpage from "./pages/Testpage"
import UserDataProvider from './contexts/UserDataContext';

const routing = (
  <Router>
    <Switch>
      <UserDataProvider>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/home" component={Home} />
        <Route path="/testpage" component={Testpage} />
      </UserDataProvider>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Testpage from "./pages/Testpage"
import { AuthProvider } from "./contexts/AuthContext";
import UserDataProvider from './contexts/UserDataContext';

const routing = (
  <Router>
    <Switch>
      <AuthProvider>
        <UserDataProvider>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/testpage" component={Testpage} />
        </UserDataProvider>
      </AuthProvider>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
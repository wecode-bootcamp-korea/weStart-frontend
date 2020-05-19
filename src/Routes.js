import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/MainPageApp";
import Login from "./pages/Login/LoginPageApp";
import Signup from "./pages/Signup/SignupPageApp";


class Routes extends Component {
  constructor() {
    super();
  }    
  
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />          
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
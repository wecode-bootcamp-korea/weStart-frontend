import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainJS from "./pages/MainJS/MainPageApp";
import LoginJS from "./pages/LoginJS/LoginPageApp";
import SignupJS from "./pages/SignupJS/SignupPageApp";
// import MainJY from "./pages/MainJY/MainPageApp";
// import LoginJY from "./pages/LoginJY/LoginPageApp";
// import SignupJY from "./pages/SignupJY/SignupPageApp";


class Routes extends Component {
  constructor() {
    super();
  }    
  
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/mainJS" component={MainJS} />
          <Route exact path="/JS" component={LoginJS} />
          <Route exact path="/loginJS" component={LoginJS} />          
          <Route exact path="/signupJS" component={SignupJS} />
          {/* <Route exact path="/mainJY" component={LoginJY} />
          <Route exact path="/loginJY" component={LoginJY} />          
          <Route exact path="/signupJY" component={SignupJY} /> */}
        </Switch>
      </Router>
    )
  }
}

export default Routes;
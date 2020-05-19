import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/common.scss";
import "./styles/reset.scss";
// import MainPageApp from './pages/Main/MainPageApp';
// import LoginPageApp from './pages/Login/LoginPageApp';
// import LoginPageApp from './pages/Signup/SignupPageApp';
import Routes from "./Routes";

// ReactDOM.render(<MainPageApp />, document.getElementById('root'));
// ReactDOM.render(<LoginPageApp />, document.getElementById('root'));
// ReactDOM.render(<SignupPageApp />, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('root'));
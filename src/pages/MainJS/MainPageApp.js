import React, { Component } from 'react';
import "./MainPageApp.scss";
import Nav from "./Nav/Nav";
import MainPageContents from "./MainPageContents/MainPageContents";

class MainPageApp extends Component {
  constructor () {
    super();
  }
  
  render() {
    return (
      <div className="MainPage">
        <Nav />
        <MainPageContents />
      </div>
    )
  }  
}

export default MainPageApp;
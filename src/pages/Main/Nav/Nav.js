import React, { Component } from 'react';
import "./Nav.scss";
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
  }

  goToLogin() {
    this.props.history.push('/login');  
  }

  render() {
    return (      
      <nav>        
        <div className="nav-contents">        
          <div className="logo" onClick={this.goToLogin.bind(this)}>
            <img src={require('../../../images/instagramtext.png')} alt="instagram" />            
          </div>        
          <input type="text" placeholder="검색" />              
          <div className="menu-div">
            <img src={require('../../../images/home.png')} alt="home"/>
            <img src={require('../../../images/DM.png')} alt="DM"/>
            <img src={require('../../../images/explore.png')} alt="explore"/>
            <img src={require('../../../images/heart.png')} alt="like"/>
            <img src={require('../../../images/pjs.jpg')} alt="profile" className="nav-profile"/>       
          </div>        
        </div>    
      </nav>
    )
  }
}

export default withRouter(Nav);
import React, { Component } from "react"
import "./LoginImageChange.scss"

class LoginImageChange extends Component {
  constructor() {
    super()
  }

  render(){
    return(      
      <div className="LoginImageChange">
        <img src={require('../../../images/backgroundPhone.png')} alt="phone" />               
        <div className="imgTransform">
          <img src={require('../../../images/sample1.jpg')} alt="sample" />                            
        </div>
      </div>
    )
  }
}

export default LoginImageChange
import React, { Component } from "react"
import "./LoginImageChange.scss"

class LoginImageChange extends Component {
  constructor() {
    super()
    this.state = {
      imgIndex:1
    }
  }

  changeNum = () => {
    if (this.state.imgIndex === 1) return this.setState({imgIndex:2})
    if (this.state.imgIndex === 2) return this.setState({imgIndex:3})
    if (this.state.imgIndex === 3) return this.setState({imgIndex:4})
    if (this.state.imgIndex === 4) return this.setState({imgIndex:5})
    if (this.state.imgIndex === 5) return this.setState({imgIndex:1}) 
  }
  
  componentDidMount() {
    setInterval(this.changeNum, 2000);
  }

  render(){
    return(      
      <div className="LoginImageChange">
        <img src={require('../../../images/backgroundPhone.png')} alt="phone" />               
        <div className="imgTransform">
          <img src={require('../../../images/sample' + this.state.imgIndex + '.jpg')} alt="sample" />                            
        </div>
      </div>
    )
  }
}

export default LoginImageChange
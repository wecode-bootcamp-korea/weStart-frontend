import React, { Component } from "react"
import "./LoginImageChange.scss"

class LoginImageChange extends Component {
  constructor() {
    super()
    this.state = {
      imgIndex:1
    }
  }
  
  // 이미지 주소값을 바꾸는 함수 //
  // 이미지가 고정으로 6개 이기에 약간 하드코딩 //
  changeNum = () => {
    if (this.state.imgIndex !== 5) this.setState({imgIndex:this.state.imgIndex+1})
    else this.setState({imgIndex:1})    
  }
  
  // 이미지 바꾸는 함수를 지속적으로 실행해줄 setInterval함수 //
  componentDidMount() {
    setInterval(this.changeNum, 2000);
  }

  render(){
    return(      
      <div className="LoginImageChange">
        <img src={require('../../../images/backgroundPhone.png')} alt="phone" />               
        <div className="imgTransform">
          <img src={require(`../../../images/sample${this.state.imgIndex}.jpg`)} alt="sample" />                            
        </div>
      </div>
    )
  }
}

export default LoginImageChange
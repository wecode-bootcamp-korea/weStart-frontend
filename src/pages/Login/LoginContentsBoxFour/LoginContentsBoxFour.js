import React, { Component } from "react";
import "./LoginContentsBoxFour.scss";

class LoginContentsBoxFour extends Component {
  constructor() {
    super();    
  }

  render(){
    return(
      <div className="LoginContentsBoxFour">
        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank">
          <img src={require('../../../images/appDown.png')} alt="logo" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA80F551D-B009-4126-9272-DBBCD33D6190%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank">
          <img src={require('../../../images/playDown.png')} alt="logo" />
        </a>            
      </div>
    )
  }
}

export default LoginContentsBoxFour
import React from "react";
import Header from '../../images/nhlHeader.jpg'
import "./style.css";

function Title() {
    // Import result is the URL of your image
    return <img className="header" src={Header} alt="header" />;
  }

export default Title;
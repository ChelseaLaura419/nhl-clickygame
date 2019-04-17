import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
         <ul>
          <li className="nav-item">Test Your Memory</li>
          </ul>
          <ul>
          <li className="nav-item my-2 my-sm-0">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
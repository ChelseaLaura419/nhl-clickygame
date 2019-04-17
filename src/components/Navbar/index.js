import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
         <ul>
          <li className="nav-item">Test Your Memory: Don't Click On The Same Team Twice!</li>
          </ul>
          <ul>
          <li className="nav-item">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
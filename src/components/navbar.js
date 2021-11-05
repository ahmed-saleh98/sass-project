import React, { Component } from "react";
class NavBar extends Component {
  state = {
    navbarOben: false,
  };

  handleToggle = () => {
    const navbarOben = this.state.navbarOben;
    this.setState({
      navbarOben: !navbarOben,
    });
  };
  render() {
    const navbarOben = this.state.navbarOben;
    return (
      <div className="navbar">
        <div
          onClick={this.handleToggle}
          className={`toggle-button  ${navbarOben ? "full-width" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${navbarOben ? "show-nav" : ""}`}>
          <li>
            <a href="#home">Homepage</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#players">Players</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

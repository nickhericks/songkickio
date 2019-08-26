import React, { Component } from "react";
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container contain-960">
          <div className="logo-container">LOGO</div>

          <ul className="nav-container">
            <li className="nav-btn">
              <NavLink to="/" activeClassName="">
                One
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink to="/two" activeClassName="">
                Two
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink to="/three" activeClassName="">
                Three
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink to="/four" activeClassName="">
                Four
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink to="/five" activeClassName="">
                Five
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

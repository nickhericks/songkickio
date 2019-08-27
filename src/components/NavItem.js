import React from "react";
import { NavLink } from "react-router-dom";


const NavItem = props => {


  return (
    <li className="nav-btn">
      <NavLink to={`/${props.url}`} activeClassName="">
        <span className='nav-icon'>{props.icon}</span>
        <br />
        <span className='nav-title'>{props.title}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;

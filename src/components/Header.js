import React, { Component } from "react";

import NavItem from "./NavItem";




class Header extends Component {
  state = {
    menuItems: [
      {
        title: "Home",
        url: "home",
        icon: "🏠"
      },
      {
        title: "Portfolio",
        url: "portfolio",
        icon: "💼"
      },
      {
        title: "Blog",
        url: "blog",
        icon: "✏️"
      },
      {
        title: "Resume",
        url: "resume",
        icon: "📂"
      },
      {
        title: "Contact",
        url: "contact",
        icon: "📞"
      }
    ]
  };

  render() {
    return (
      <header>
        <div className="header-container contain-960">
          <div className="logo-container">LOGO</div>

          <ul className="nav-container">
            {/* USE JAVASCRIPT TO PROGRAMMATICALLY BUILD OUT NAV */}

            {this.state.menuItems.map(item => (
              <NavItem title={item.title} icon={item.icon} url={item.url} />
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

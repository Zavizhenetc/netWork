import React, { Component } from 'react';
import logo from "../logo.svg";

const Header = () =>{
return <header className="header">
<img className="logo" src={logo} />
<nav className="nav">
  <ul className="nav__items">
    <li className="nav_item"></li>
    <li className="nav_item"></li>
    <li className="nav_item"></li>
  </ul>
</nav>
</header>
}

export default Header;
import React, { Component } from 'react';


const MainNav = () =>
{return  <div className="main__nav">
<ul className="main__nav-items">
  <li className="main__nav-item">
    <a href="#">Profile</a>
  </li>
  <li className="main__nav-item">
    <a href="#">Mesages</a>
  </li>
  <li className="main__nav-item">
    <a href="#">News</a>
  </li>
  <li className="main__nav-item">
    {" "}
    <a href="#">Music</a>
  </li>
  <li className="main__nav-item">
    <a href="#">Settings</a>
  </li>
</ul>
</div>}
export default MainNav;
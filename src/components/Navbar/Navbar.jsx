import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h2 className={styles.title}>Home</h2>

      <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink to="/Profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/Dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/News" activeClassName={styles.activeLink}>News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/Music" activeClassName={styles.activeLink} >Music</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/Settings" activeClassName={styles.activeLink}>Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

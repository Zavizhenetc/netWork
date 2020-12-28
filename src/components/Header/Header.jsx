import React, { Component } from 'react';
import logo from "../../assets/images/icon_cat.png";
import styles from './Header.module.css'

const Header = () =>{
return <header className={styles.header}>
<img className={styles.logo} src={logo} />
<input className={styles.search} type="text" name ="search" placeholder="найти в Sonet" ></input>
<nav className={styles.nav}>
  <ul className={styles.items}>
    <li className={styles.item}></li>
    <li className={styles.item}></li>
    <li className={styles.item}></li>
  </ul>
</nav>
</header>
}

export default Header;
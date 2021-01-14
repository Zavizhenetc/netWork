import React, { Component } from 'react';
import logo from "../../assets/images/icon_cat.png";
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) =>{
return <header className={styles.header}>
<img className={styles.logo} src={logo} />
<input className={styles.search} type="text" name ="search" placeholder="найти в Sonet" ></input>
   <div className={styles.login}>
     {props.isAuth ? <div>{props.login} <button onClick={props.logout} >logout</button></div> :  <NavLink to={'/login'}>Login</NavLink>}

  </div>
{/*<nav className={styles.nav}>*/}
{/*  <ul className={styles.items}>*/}
{/*    <li className={styles.item}></li>*/}
{/*    <li className={styles.item}></li>*/}
{/*    <li className={styles.item}></li>*/}
{/*  </ul>*/}
{/*</nav>*/}
</header>
}

export default Header;
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
</header>
}

export default Header;
import React, { Component } from "react";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages.jsx";
import {NavLink} from "react-router-dom"

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
        <li className={styles.dialogsItem}><NavLink to="/Dialogs/1" activeClassName={styles.activeLink}>ALex</NavLink></li>
        <li className={styles.dialogsItem}><NavLink to="/Dialogs/2" activeClassName={styles.activeLink}>Dima</NavLink></li>
        <li className={styles.dialogsItem}><NavLink to="/Dialogs/3" activeClassName={styles.activeLink}>Serg</NavLink></li>
        <li className={styles.dialogsItem}><NavLink to="/Dialogs/4" activeClassName={styles.activeLink}>Dasha</NavLink></li>
      </ul>
      <Messages />
    </div>
  );
};

export default Dialogs;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";


const DialogsItem = (props) => {
  return (
    <li className={styles.dialogsItem}>
      <NavLink to={`/Dialogs/${props.id}`} activeClassName={styles.activeLink} key={props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};







export default DialogsItem;

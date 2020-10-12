import React, { Component } from "react";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages.jsx";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={styles.dialogsItem}>
      <NavLink to={`/Dialogs/${props.id}`} activeClassName={styles.activeLink}>
        {props.name}
      </NavLink>
    </li>
  );
};

const Dialogs = (props) => {
  const dialogs = [
    {
      id: "1",
      name: "ALex",
    },
    {
      id: "2",
      name: "Dima",
    },
    {
      id: "3",
      name: "Serg",
    },
    {
      id: "4",
      name: "Dasha",
    },
  ];
  const dialogsElements = dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  });

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
      {dialogsElements}
        
      </ul>
      <Messages />
    </div>
  );
};

export default Dialogs;

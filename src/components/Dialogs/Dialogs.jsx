import React, { Component } from "react";
import styles from "./Dialogs.module.css";
// import Messages from "./Messages/Messages.jsx";
import Messages from "./Messages/Messages.jsx";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem.jsx"


const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map((dialog) => {
    return <DialogsItem name={dialog.name} id={dialog.id}  key={dialog.id}/>
  });

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
      {dialogsElements}
        
      </ul>
      <Messages messages ={props.messages}  dispatch={props.dispatch} />
    </div>
  );
};

export default Dialogs;

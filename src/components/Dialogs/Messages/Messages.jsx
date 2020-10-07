import React, { Component } from "react";
import styles from "./Messages.module.css";

const Messages = () => {
  return (

      <ul className={styles.messages}>
        <li className={styles.message}>Hello !</li>
        <li className={styles.message}>How are you?</li>
        <li className={styles.message}>whatsUpp !!</li>
      </ul>

  );
};

export default Messages;

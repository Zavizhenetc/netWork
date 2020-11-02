import React, { Component } from 'react';
import styles from './Messages.module.css';

const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

const Messages = (props) => {
  const messagesItems = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  return <ul className={styles.messages}>{messagesItems}</ul>;
};

export default Messages;

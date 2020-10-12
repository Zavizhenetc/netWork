import React, { Component } from "react";
import styles from "./Messages.module.css";

const messages = [
  {
  message: "Hello",
  id:'1'
},
  {
  message: "whatsUpp",
  id:'2'
},
  {
  message: "How are you?",
  id:'3'
}
]


const Message =(props)=>{
  return(
    <li className={styles.message}>{props.message}</li>

  )
}
const messagesItems = messages.map(message =>
  <Message message={message.message} />
)

const Messages = (props) => {
  return (

      <ul className={styles.messages}>
      {messagesItems}
      {/* <Message message="Hello!"/>
      <Message message="How are you?"/>
      <Message message="!!!"/> */}
      </ul>

  );
};

export default Messages;

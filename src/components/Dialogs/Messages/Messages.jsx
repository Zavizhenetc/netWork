import React, { Component } from 'react';
import styles from './Messages.module.css';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../../redux/messagesPagesReducer';


const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

const Messages = (props) => {
  const messagesItems = props.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let newMessageBody = props.newMessageBody;

  const onSendMessageClick = () =>{
    props.dispatch(sendMessageCreator());  
  }
  const onNewMessageChange = (event) =>{
    let text = event.target.value;
    props.dispatch( updateNewMessageBodyCreator(text)); 
  }
  return (
  <div className={styles.messages}>
    <div>{messagesItems}</div>
    <div className={styles.messages__textContainer}>
      <textarea  onChange={onNewMessageChange}  value ={newMessageBody}  placeholder ='Enter your message'></textarea>
       <button type='submit' onClick={onSendMessageClick} >Send</button>
    </div>
  </div> 

  )
  ;
};

export default Messages; 

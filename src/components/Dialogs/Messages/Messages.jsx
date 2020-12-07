import React from 'react';
import styles from './Messages.module.css';



const Messages = (props) => {
  // let newMessageBody = props.state.newMessageBody;
  // const onNewMessageChange = (event) => {
  //   let body = event.target.value;
  //   props.onNewMessageChange(body);
  // }
  return (
    <div className={styles.messages}>
      <div className={styles.messages__textContainer}>
        {/*<textarea*/}
        {/*  onChange={onNewMessageChange}*/}
        {/*  value={newMessageBody}*/}
        {/*  placeholder='Enter your message'>*/}
        {/*</textarea>*/}
        {/*<button type='submit' onClick={props.onSendMessageClick}>Send</button>*/}
      </div>
    </div>

  )
    ;
};

export default Messages; 

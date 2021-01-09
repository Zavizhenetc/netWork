import React from "react";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages.jsx";
import DialogsItem from "./DialogsItem/DialogsItem.jsx"
import {Redirect} from "react-router-dom";

const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;


  const onSendMessageClick = () => {
    props.sendMessage();

  }

  const onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  const dialogsElements = state.dialogs.map((dialog) => {
    return <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
  });

  const messagesItems = state.messages.map((message) => (
    <Message message={message.message} key={message.id}
    />
  ));
  //делаем редирект если не залогинен
  if (!props.isAuth ) return <Redirect to={"/Login"} />

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
        {dialogsElements}
      </ul>
      <div className={styles.messages}>
        {messagesItems}
        <div className={styles.messages__textContainer}>
          <Messages/>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder='Enter your message'>
          </textarea>
          <button type='submit' onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

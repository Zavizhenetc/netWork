import React from "react";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages.jsx";
import DialogsItem from "./DialogsItem/DialogsItem.jsx"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;



const addNewMessage =(values)=>{
  props.sendMessage(values.newMessageBody);
}
  const dialogsElements = state.dialogs.map((dialog) => {
    return <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  });

  const messagesItems = state.messages.map((message) => (
    <Message message={message.message} key={message.id}
    />
  ));
  //делаем редирект если не залогинен
  if (!props.isAuth) return <Redirect to={"/Login"}/>

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} >
        <Field  component={'textarea'} name={'newMessageBody'} placeholder='Enter your message'/>
        <button >Send</button>
      </form>
    )
  }
  const  AddMessageFormRedux  = reduxForm({form:'dialogAddMessageForm '})(AddMessageForm);

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
        {dialogsElements}
      </ul>
      <div className={styles.messages}>
        {messagesItems}
        <div className={styles.messages__textContainer}>
          <Messages/>
          <AddMessageFormRedux  onSubmit={addNewMessage} />
        </div>

      </div>
    </div>
  );
};


export default Dialogs;

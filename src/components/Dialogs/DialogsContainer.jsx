import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import DialogsItem from "./DialogsItem/DialogsItem";


const DialogsContainer = (props) => {

  let state =  props.store.getState();

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  const onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange}  sendMessage={onSendMessageClick} dialogsPage={state.dialogsPage}  />
  );
};

export default DialogsContainer;

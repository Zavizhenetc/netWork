import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyCreator(text));

    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

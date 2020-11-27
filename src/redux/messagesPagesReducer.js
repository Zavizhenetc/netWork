const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let  initialState = {
   
    messages: [
      {
        message: 'Hello',
        id: '1',
      },
      {
        message: 'whatsUpp',
        id: '2',
      },
      {
        message: 'How are you?',
        id: '3',
      },
    ],
    dialogs: [
      {
        id: '1',
        name: 'ALex',
      },
      {
        id: '2',
        name: 'Dima',
      },
      {
        id: '3',
        name: 'Serg',
      },
      {
        id: '4',
        name: 'Dasha',
      },
    ],
    newMessageBody: ''
} 


 const messagesPagesReducer = (state = initialState, action) => {

  switch(action.type) {
case UPDATE_NEW_MESSAGE_BODY:
  state.newMessageBody = action.body;
  return state;
  case SEND_MESSAGE:
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push({ id: 4,
      message: body});
   
    return state;
    default:
    return state
  }
};


export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};
export default messagesPagesReducer
;

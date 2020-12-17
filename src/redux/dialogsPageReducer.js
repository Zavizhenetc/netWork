const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      };

    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 4, message: body}]
      };

    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  }
};
export default dialogsPageReducer;

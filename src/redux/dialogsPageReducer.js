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
  ]
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: body}]
      };

    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {type: SEND_MESSAGE, newMessageBody}
};

export default dialogsPageReducer;

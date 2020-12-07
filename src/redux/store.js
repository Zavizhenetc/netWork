import profilePageReducer from './contentPageReducer.js';
import dialogsPageReducer from './messagesPagesReducer.js';
import sideBarReducer from './sideBarReducer.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    contentPage: {
      postsData: [
        {
          id: '1',
          message: 'Hello',
          likesCount: '10',
        },
        {
          id: '2',
          message: 'first',
          likesCount: '5',
        },
        {
          id: '3',
          message: 'second',
          likesCount: '20',
        },
      ],
      newPostText: 'newPostText',
    },

    messagesPages: {
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
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('stateChange');
  },
  subscribe(observe) {
    this._callSubscriber = observe;
  },

  _addPost() {
    let newPosts = {
      id: 4,
      message: this._state.contentPage.newPostText,
      likesCount: 0,
    };
    this._state.contentPage.postsData.push(newPosts);
    this._state.contentPage.newPostText = '';
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.contentPage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _updateNewMessageBody(body) {
    this._state.messagesPages.newMessageBody = body;
    this._callSubscriber(this._state);
  },
  _sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messagesPages.newMessageBody,
    };
    this._state.messagesPages.messages.push(newMessage);
    this._state.messagesPages.newMessageBody = '';
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    this._state.contentPage = profilePageReducer(
      this._state.contentPage,
      action
    );
    this._state.messagesPages = dialogsPageReducer(
      this._state.messagesPages,
      action
    );
    this._state.sideBarReducer = sideBarReducer(
      this._state.sideBarReducer,
      action
    );
    this._callSubscriber(this._state);
  },
};



export default store;
window.store = store;

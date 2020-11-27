import { createStore, combineReducers } from 'redux';
import contentPageReducer from './contentPageReducer.js';
import messagesPagesReducer from './messagesPagesReducer.js';
import sideBarReducer from './sideBarReducer.js';


let redusers = combineReducers({
  contentPage: contentPageReducer,
  messagesPages: messagesPagesReducer,
  sideBar: sideBarReducer,
});

let store = createStore(redusers);

export default store;

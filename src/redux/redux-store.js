import { createStore, combineReducers } from 'redux';
import profilePageReducer from './profilePageReducer.js';
import dialogsPageReducer from './dialogsPageReducer.js';
import sideBarReducer from './sideBarReducer.js';


let redusers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
});

let store = createStore(redusers);

export default store;

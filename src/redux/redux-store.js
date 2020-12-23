import {createStore, combineReducers} from 'redux';
import profilePageReducer from './profilePageReducer.js';
import dialogsPageReducer from './dialogsPageReducer.js';
import sideBarReducer from './sideBarReducer.js';
import friendsPageReducer from "./friendsPageReducer";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  friends: friendsPageReducer,
  sideBar: sideBarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

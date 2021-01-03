import {createStore, combineReducers, applyMiddleware} from 'redux';
import profilePageReducer from './profilePageReducer.js';
import dialogsPageReducer from './dialogsPageReducer.js';
import sideBarReducer from './sideBarReducer.js';
import friendsPageReducer from "./friendsPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  friends: friendsPageReducer,
  sideBar: sideBarReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

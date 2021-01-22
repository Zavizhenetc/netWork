import {createStore, combineReducers, applyMiddleware} from 'redux';
import profilePageReducer from './profilePageReducer.js';
import dialogsPageReducer from './dialogsPageReducer.js';
import sideBarReducer from './sideBarReducer.js';
import friendsPageReducer from "./friendsPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";


const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  friends: friendsPageReducer,
  sideBar: sideBarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

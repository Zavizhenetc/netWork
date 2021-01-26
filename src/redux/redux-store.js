import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
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
//подключаем раширение для хром redux devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.__store__ = store;

export default store;

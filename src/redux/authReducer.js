import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/authReducer/SET_USER_DATA';


const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: false,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        // isAuth: true,
      };
    }
    default:
      return state;
  }

}
export const setAuthUserData = (userId, login, email, isAuth) => {
  return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
};
export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {

    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }

}
export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Incorrect some field';
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;
import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/authReducer/GET_CAPTCHA_URL_SUCCESS';


const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
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
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }

}
export const setAuthUserData = (userId, login, email, isAuth) => {
  return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
  }
};

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {

    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }

}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Incorrect some field';
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;
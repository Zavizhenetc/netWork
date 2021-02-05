import React from "react";
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {createField, InputArea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], InputArea)}
      {createField('Password', 'password', [required], InputArea, {type: 'password'})}
      {createField(null, 'rememberMe', null, InputArea, {type: 'checkbox'}, 'remember me')}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField( 'Symbols from image', 'captcha', [required], InputArea, {} )}
      {error && <p className={styles.formSummaryError}>{error}</p>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);
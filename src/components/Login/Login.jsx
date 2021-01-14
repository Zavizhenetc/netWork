import React from "react";
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {InputArea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={'Email'} validate={[required]}  name={'email'}  component={InputArea} />
      </div>
      <div>
        <Field placeholder={'Password'}  validate={[required]} type='password' name={'password'} component={InputArea} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={InputArea} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({form:'email'})(LoginForm);

const Login = (props) => {
  const onSubmit =(formData)=>{
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if(props.isAuth){
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>LOGIN</h1>
      <LoginReduxForm  onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
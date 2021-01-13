import React from "react";
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={'login'} name={'login'}  component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = (props) => {

  const onSubmit =(formData)=>{
    console.log(formData);
  }
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>LOGIN</h1>
      <LoginReduxForm  onSubmit={onSubmit} />
    </div>
  )
}
export default Login;
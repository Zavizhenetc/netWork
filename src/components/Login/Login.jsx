import React from "react";
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {InputArea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={'login'} validate={[required]}  name={'login'}  component={InputArea} />
      </div>
      <div>
        <Field placeholder={'Password'}  validate={[required]}  name={'password'} component={InputArea} />
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
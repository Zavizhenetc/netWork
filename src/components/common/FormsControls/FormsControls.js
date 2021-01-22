import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControl =({input, meta, ...props})=> {
  const hasError = meta.touched && meta.error
  return(
    <div className={ `${styles.formTextarea} ${hasError ? styles.errorTextarea : ' '}`}>
      {hasError && <p className={styles.errorSpan}>{meta.error}</p>}
      {props.children}
    </div>
  )
}



export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props} > <textarea  {...input} {...restProps} /> </FormControl>
}

export const  InputArea =(props)=>{
  const {input, meta, ...restProps} = props;
  return <FormControl {...props} > <input  {...input} {...restProps} /> </FormControl>
}

export const createField =(placeholder, name, validators, component, props = {}, text = "")=>  (
  <div>
    <Field placeholder={placeholder} validate={validators}  name={name}  component={component}  {...props}/> {text}
  </div>
  )
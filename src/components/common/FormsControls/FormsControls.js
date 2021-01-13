import React from "react";
import styles from "./FormsControls.module.css";

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
  // export const Textarea =({input, meta, ...props})=> {
  // const hasError = meta.touched && meta.error
  // return(
  //   <div className={ `${styles.formTextarea} ${hasError ? styles.errorTextarea : ' '}`}>
  //     {hasError && <p className={styles.errorSpan}>{meta.error}</p>}
  //     <textarea  {...input} {...props} />
  //
  //   </div>
  // )
// }
export const  InputArea =(props)=>{
  const {input, meta, ...restProps} = props;
  return <FormControl {...props} > <input  {...input} {...restProps} /> </FormControl>
}
// export const  InputArea =({input, meta, ...props})=> {
//   const hasError = meta.touched && meta.error
//   return(
//     <div className={ `${styles.formTextarea} ${hasError ? styles.errorTextarea : ' '}`}>
//       {hasError && <p className={styles.errorSpan}>{meta.error}</p>}
//       <input  {...input} {...props} />
//
//     </div>
//   )
// }
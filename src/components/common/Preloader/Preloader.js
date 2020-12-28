import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import styles from "../../Friends/Friends.module.css";

const Preloader = (props)=>{
  return <>
    <img src={preloader} className={styles.preloader}/>
    </>
}
export default Preloader;
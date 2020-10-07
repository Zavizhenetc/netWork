import React, { Component } from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>

      <img className={styles.authorAva} src="https://pp.userapi.com/c847124/v847124728/335f4/thh2-8S3ZKM.jpg"/>
      <p className={styles.text}>{props.message}</p>
    </div>
  );
};

export default Post;

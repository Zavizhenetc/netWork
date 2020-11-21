import React, { Component } from "react";
import styles from "./Content.module.css";
import Posts from "./Posts/Posts.jsx";
import Profile from "./Profile/Profile.jsx";


const Content = (props) => {  
  

  return (
    <div className={styles.content}>
      <Profile />
      <Posts postsData={props.postsData} addPost={props.addPost} />
    </div>
  );
};
export default Content;

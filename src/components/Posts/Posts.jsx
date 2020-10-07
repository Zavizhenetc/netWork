import React, { Component } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.input}>
        <input
          className={styles.addPost}
          type="text"
          placeholder="что у вас нового"
        ></input>
        <button className={styles.button} type="submit">
          send post
        </button>
      </div>

      <Post message="first" />
      <Post message ="echo odna"/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default Posts;

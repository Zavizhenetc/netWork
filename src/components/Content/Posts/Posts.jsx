import React, { Component } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post.jsx";




const Posts = (props) => {
  const postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
      {postsElements} 
    </div>
  );
};
export default Posts;

import React, { Component } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const postsData = [
  {
    id: "1",
    message: "Hello",
    likesCount: "10",
  },
  {
    id: "2",
    message: "first",
    likesCount: "5",
  },
  {
    id: "3",
    message: "second",
    likesCount: "20",
  },
];

const postsElements = postsData.map((post) => (
  <Post message={post.message} likesCount={post.likesCount} />
));

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
      {postsElements} 
    </div>
  );
};
export default Posts;

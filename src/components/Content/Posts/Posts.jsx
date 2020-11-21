import React, { Component } from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = (props) => {
  const postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));
let newPostElem = React.createRef();

  const addPost = () => {
    let text = newPostElem.current.value;
    props.addPost(text);
    newPostElem.current.value = '';
  };

  return (
    <div className={styles.posts}>
      <div className={styles.input}>
        <input ref={newPostElem}
          className={styles.addPost}
          type='text'
          placeholder='что у вас нового'
        ></input>
        <button onClick={addPost} className={styles.button} type='submit'>
          send post
        </button>
      </div>
      {postsElements}
    </div>
  );
};
export default Posts;

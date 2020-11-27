import React, { Component } from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/contentPageReducer.js';




const Posts = (props) => {
  const postsElements = props.contentPage.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));
let newPostElem = React.createRef();
let newPostTextBody = props.contentPage.newPostText
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (event) => {
    let text = event.target.value;
  props.dispatch(updateNewPostTextActionCreator(text));
 

  };

  return (
    <div className={styles.posts}> 
      <div className={styles.input}>
        <input   onChange={onPostChange} value={newPostTextBody}
          className={styles.addPost}
          type='text'
          placeholder='что у вас нового'
        />
        <button onClick={addPost} className={styles.button} type='submit'>
          send post
        </button>
      </div>
      {postsElements}
    </div>
  );
};
export default Posts;

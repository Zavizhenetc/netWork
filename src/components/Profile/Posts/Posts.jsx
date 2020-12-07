import React, {Component} from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post.jsx';


const Posts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id}/>
  ));
  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);

  };

  return (
    <div className={styles.posts}>
      <div className={styles.input}>
        <input onChange={onPostChange} value={props.newPostTextBody}
               className={styles.addPost}
               type='text'
               placeholder='что у вас нового'
        />
        <button onClick={onAddPost} className={styles.button} type='submit'>
          send post
        </button>
      </div>
      {postsElements}
    </div>
  );
};
export default Posts;

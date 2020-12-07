import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilePageReducer.js';
import Posts from './Posts.jsx';


const PostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);


  };
  return (
    <Posts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postsData}
           dispatch={props.dispatch} newPostTextBody={state.profilePage.newPostText}/>
  );
};

export default PostsContainer;

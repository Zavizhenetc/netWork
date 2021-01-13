import React from 'react';
import {addPostActionCreator} from '../../../redux/profilePageReducer.js';
import Posts from './Posts.jsx';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostTextBody: state.profilePage.newPostText,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;

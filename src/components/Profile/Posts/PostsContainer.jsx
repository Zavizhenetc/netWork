import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilePageReducer.js';
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
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },

  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;

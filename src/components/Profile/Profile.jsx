import React, {Component} from "react";
import styles from "./Profile.module.css";
// import Posts from "./Posts/Posts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Posts/PostsContainer.jsx";


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo/>
      <PostsContainer />
      {/*<PostsContainer store={props.store}/>*/}
    </div>
  );
};
export default Profile;

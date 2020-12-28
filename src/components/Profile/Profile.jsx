import React, {Component} from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Posts/PostsContainer.jsx";


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.profile}/>
      <PostsContainer />
    </div>
  );
};
export default Profile;

import React, {Component} from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Posts/PostsContainer.jsx";
import {updateStatus} from "../../redux/profilePageReducer";


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <PostsContainer />
    </div>
  );
};
export default Profile;

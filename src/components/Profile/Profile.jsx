import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Posts/PostsContainer.jsx";


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo  isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile}
                    status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
      <PostsContainer />
    </div>
  );
};
export default Profile;

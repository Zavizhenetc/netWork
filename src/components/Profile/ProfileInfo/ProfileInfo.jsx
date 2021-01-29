/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

  const onMainPhotoSelected =(e)=>{
if(e.target.files.length ){
  props.savePhoto(e.target.files[0]);
}
  }
  if (!props.profile) {
    return <Preloader/>
  }
    return (
      <div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus} />*/}
        <div className={styles.author}>
          <div className={styles.avatarContainer}>
            <img className={styles.authorAvatar}  src={props.profile.photos.large || userPhoto }/>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected} /> }

          </div>
          <div className={styles.authorContainer}>
            <p className={styles.authorName}>Name: {props.profile.fullName}</p>
            <p className={styles.city}>City: Moscow</p>
            <p className={styles.dateBirth}>Date of birth: 19.07.1993</p>
          </div>
        </div>
      </div>

    )
}

export default ProfileInfo
/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "../ProfileDataForm";




const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  const onSubmit =   (formData) => {
   props.saveProfile(formData).then(()=>{
    setEditMode(false);
  })


  }

  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    <div className={styles.author}>
      <div className={styles.avatarContainer}>
        <img className={styles.authorAvatar} src={props.profile.photos.large || userPhoto}/>
        {props.isOwner && <input  type="file" title='' onChange={onMainPhotoSelected}/>}
        {props.isOwner && <button className={styles.editButton} onClick={()=>{
          setEditMode(true)}}>edit</button>}
      </div>
      {editMode
        ? <ProfileDataForm initialValues={props.profile}  profile={props.profile} onSubmit={onSubmit} onMainPhotoSelected={onMainPhotoSelected}/> :
        <ProfileData profile={props.profile} onMainPhotoSelected={onMainPhotoSelected} isOwner={props.isOwner} goToEditMode={()=>{
          setEditMode(true)}
        }/>}
    </div>

      </>

  )
}

const ProfileData = ({profile, onMainPhotoSelected, isOwner, goToEditMode}) => {
  return <>
    <div className={styles.authorContainer}>
      <p className={styles.authorName}>Name: <span>{profile.fullName}</span></p>
      <p className={styles.authorjob}>Looking for a job : <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
      </p>
      {profile.lookingForAJob &&
      <p className={styles.authorjob}>Skills: <span>{profile.lookingForAJobDescription }</span></p>
      }
      <p className={styles.authoAbout}>About me: <span>{profile.aboutMe}</span></p>

      <div className={styles.contacts}>Contacts: <span>{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}</span></div>
    </div>
  </>
}

const Contact = ({contactTitle, contactValue}) => {
  return <p className={styles.contactTitle}>{contactTitle}:<span>{contactValue}</span></p>
}
export default ProfileInfo
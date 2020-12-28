/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) =>{
  if(!props.profile){
    return <Preloader />
  }else {
    return (
      <div className={styles.author}>
        <div className={styles.avatarContainer}>
          <img className={styles.authorAvatar}
            // src="https://img3.goodfon.ru/wallpaper/nbig/8/37/dzhon-snou-igra-prestolov-kit.jpg"
               src={props.profile.photos.large}
          />
        </div>
        <div className={styles.authorContainer}>
          <p className={styles.authorName}>Name: {props.profile.fullName}</p>
          <p className={styles.city}>City: Moscow</p>
          <p className={styles.dateBirth}>Date of birth: 19.07.1993</p>
        </div>
      </div>
    )
  }
}

export default ProfileInfo
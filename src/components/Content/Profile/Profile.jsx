/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles from './Profile.module.css';



const Profile = (props) =>{
  return (
    <div className={styles.author}>
    <div className={styles.avatarContainer}>
      <img className={styles.authorAvatar}
        src="https://img3.goodfon.ru/wallpaper/nbig/8/37/dzhon-snou-igra-prestolov-kit.jpg"
      />
    </div>
    <div className={styles.authorContainer}>
      <p className={styles.authorName}>Name: Jhon Snow</p>
      <p className={styles.city}>City: Moscow</p>
      <p className={styles.dateBirth}>Date of birth: 19.07.1993</p>
    </div>
  </div>
  )
}

export default Profile
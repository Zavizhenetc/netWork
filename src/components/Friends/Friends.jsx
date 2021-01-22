import React from 'react';
import styles from './Friends.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Friend from "./Friend";

const Friends = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

  return (
    <div className={styles.friends}>
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                 onPageChanged={onPageChanged}/>

      {props.friendsPage.map(user =>
        <Friend user={user} key={user.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                follow={props.follow}/>
      )
      }
    </div>
  )
}
export default Friends;
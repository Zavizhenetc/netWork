import React from 'react';
import styles from './Friends.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.friends}>
      <div className={styles.pages}>
        {pages.map(p => {
          return <span
            className={props.currentPage === p ? `${styles.selectedPage} ${styles.pageNum}` : `${styles.pageNum}`}
            onClick={(e) => {
              props.onPageChanged(p)
            }}>
              {p}
              </span>
        })}
      </div>
      {
        props.friendsPage.map(user => <div key={user.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              user.followed ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                  withCredentials: true,
                  headers:{
                    "API-KEY": "542901ee-8d47-4ec8-a8ac-f9c2d0d99a52",
                  }
                })
                  .then(response => {
                    if (response.data.resultCode == 0) {
                      props.unFollow(user.id)
                    }
                  });

              }}>Unfollow</button> : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers:{
                    "API-KEY": "542901ee-8d47-4ec8-a8ac-f9c2d0d99a52",
                  }
                })
                .then(response => {
                if (response.data.resultCode == 0) {
                props.follow(user.id)
              }
              });


              }}>Follow</button>
              }
              </div>
              </span>
              <span>
              <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
              </span>
              <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
              </span>
              </span>
              </div>
              )
            }

    </div>
          )
          }
export default Friends;
/* eslint-disable no-unused-vars */
import React, {Component, useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus( e.currentTarget.value)
    }

  return (
    <div>
      {!editMode &&
      <div>
        <p className={styles.status}> Status: <span onClick={activateEditMode}>{props.status || "---"} </span></p>
      </div>
      }
      {editMode &&
      <div>
        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
               value={status}/>
      </div>
      }
    </div>
  )
};

export default ProfileStatusWithHooks;
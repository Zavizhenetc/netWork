import styles from "./ProfileInfo/ProfileInfo.module.css";
import React from "react";
import {createField, InputArea, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile, handleSubmit, error}) => {
  return <form className={styles.editForm} onSubmit={handleSubmit}>
    <button className={styles.editButton}>save</button>
    {error && <p
      className={styles.formSummaryError}>{error}</p>}
    <p className={styles.authorName}>Name: <span>{createField('Full name', 'fullName', [], InputArea)}</span></p>
    <p className={styles.authorjob}>Looking for a job : <span>{createField(' ',
      'lookingForAJob', [], InputArea, {type: 'checkbox'})}</span>
    </p>
    <p className={styles.authorjob}>Skills : <span>{createField('Skills ',
      'lookingForAJobDescription', [], Textarea)}
    </span>
    </p>
    <p className={styles.authoAbout}>About me: <span>{profile.aboutMe}
      {createField('About me', 'aboutMe', [], Textarea)}</span></p>


    <div className={styles.contacts}>Contacts: <span>
      {Object.keys(profile.contacts).map(key => {
        return <div key={key}>
          <p className={styles.contactTitle}>{key}: {createField(key, 'contacts.'+ key, [], InputArea)}</p>
        </div>
      })}
    </span>
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;
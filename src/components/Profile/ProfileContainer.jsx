import React, {Component} from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId=2;
    }
    this.props.getUserProfile(userId);

  }

  render() {

    return (
      <div className={styles.content}>
        <Profile {...this.props}  profile={this.props.profile}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
});
export default  compose(
  connect(mapStateToProps, {getUserProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

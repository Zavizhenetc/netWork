import React, {Component} from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId=2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);

  }
  render() {
    return (
      <div className={styles.content}>
        <Profile {...this.props}  profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
  status: state.profilePage.status,
});
export default  compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

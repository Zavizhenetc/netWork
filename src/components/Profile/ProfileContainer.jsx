import React from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.match.params.userId;
    if (!userId){
      userId= this.props.authorizedUserId ;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(this.props.match.params.userId != prevProps.match.params.userId) {
  //     this.refreshProfile();
  //   }
  // };
  render() {
    return (
      <div className={styles.content}>
        <Profile {...this.props}  profile={this.props.profile}
                 isOwner ={!this.props.match.params.userId}
                 savePhoto={ this.props.savePhoto}
                 status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,

});
export default  compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  getUsers
} from "../../redux/friendsPageReducer";

import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getFriends
} from "../../redux/friendsSelectors";

class FriendsContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);

  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize);

  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Friends totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               onPageChanged={this.onPageChanged}
               currentPage={this.props.currentPage}
               friendsPage={this.props.friendsPage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
      />
    </>
  }

}

// const mapStateToProps = (state) => {
//   return {
//     friendsPage: state.friends.users,
//     pageSize: state.friends.pageSize,
//     totalUsersCount: state.friends.totalUsersCount,
//     currentPage: state.friends.currentPage,
//     isFetching: state.friends.isFetching,
//     followingInProgress: state.friends.followingInProgress,
//   }
// };
const mapStateToProps = (state) => {

  return {
    friendsPage: getFriends(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
};


export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, setTotalUsersCount, setCurrentPage, toggleFollowingProgress, getUsers,
  })
)(FriendsContainer)
import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollowingProgress, getUsers
} from "../../redux/friendsPageReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage,this.props.pageSize )
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize )
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items)
    //   });
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

const mapStateToProps = (state) => {
  return {
    friendsPage: state.friends.users,
    pageSize: state.friends.pageSize,
    totalUsersCount: state.friends.totalUsersCount,
    currentPage: state.friends.currentPage,
    isFetching: state.friends.isFetching,
    followingInProgress: state.friends.followingInProgress,


  }
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// };

// let withRedirect =  withAuthRedirect(FriendsContainer);
//
// export default connect(mapStateToProps, {
//   follow, unfollow, setTotalUsersCount, setCurrentPage, toggleFollowingProgress, getUsers,
// })(withRedirect)

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, setTotalUsersCount, setCurrentPage, toggleFollowingProgress, getUsers,
  })
)(FriendsContainer)
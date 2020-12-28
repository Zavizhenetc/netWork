import React from 'react';
import {connect} from "react-redux";
import {
  followAC,
  setUsersAC,
  unFollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC
} from "../../redux/friendsPageReducer";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Friends totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               onPageChanged={this.onPageChanged}
               currentPage={this.props.currentPage}
               friendsPage={this.props.friendsPage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
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

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching)=>{
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
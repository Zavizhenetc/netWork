import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/friendsPageReducer";


const mapStateToProps = (state) => {
  return {
    friendsPage: state.friends.users,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId)=>{
dispatch(followAC(userId))
    },
    unfollow: (userId)=>{
dispatch(unFollowAC(userId))
    },
    setUsers: (users)=>{
dispatch(setUsersAC(users))
    }
  }
};


export default connect (mapStateToProps, mapDispatchToProps)(Friends);
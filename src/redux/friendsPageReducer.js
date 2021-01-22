import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [
    // {
    //   id: '1',
    //   photoUrl: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/3-4.png',
    //   followed: false,
    //   fullName: 'Alex',
    //   status: 'boss',
    //   location: {
    //     city: 'Kiev',
    //     country: 'Ukraine',
    //   }
    // },
    // {
    //   id: '2',
    //   photoUrl: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/3-4.png',
    //   followed: true,
    //   fullName: 'Daria',
    //   status: 'bossita',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia',
    //   }
    // },
    // {
    //   id: '3',
    //   photoUrl: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/3-4.png',
    //   followed: false,
    //   fullName: 'Jhon',
    //   status: 'know nothink',
    //   location: {
    //     city: 'Odessa',
    //     country: 'Ukraine',
    //   }
    // },

  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW :
      return {
        ...state,
       users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
      }

    case UNFOLLOW :
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
      }

    case SET_USERS :
      return {...state, users: action.users,}
    case SET_CURRENT_PAGE  :
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT  :
      return {...state, totalUsersCount: action.count}
    case TOGGLE_IS_FETCHING  :
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS  :
      return {
        ...state, followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({
  type: FOLLOW, userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW, userId,
});
export const setUsers = (users) => ({
  type: SET_USERS, users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE, currentPage,
  //если одинаковы можно только название
  // currentPage: currentPage, === currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT, count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => {
  return ({type: TOGGLE_IS_FETCHING, isFetching: isFetching,});
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId,
  });
};

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  }
};

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userID));
  const response = await apiMethod(userID);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, followSuccess);
  }
};
export const unfollow = (userID) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, unfollowSuccess);
  }
};
export default friendsPageReducer;

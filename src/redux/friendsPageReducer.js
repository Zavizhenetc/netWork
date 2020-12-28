const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
}

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW :
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        }),
      }

    case UNFOLLOW :
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        }),

      }

    case SET_USERS :
      return {
        ...state,
        users: action.users,
      }
    case SET_CURRENT_PAGE  :
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT  :
      return {
        ...state, totalUsersCount: action.count
      }
      case TOGGLE_IS_FETCHING  :
      return {
        ...state, isFetching: action.isFetching
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
   currentPage,
  //если одинаковы можно только название
  // currentPage: currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetchingAC = (isFetching) => {
  return ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  });
};

export default friendsPageReducer;

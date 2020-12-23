const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
        users: [...state.users, ...action.users],
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

export default friendsPageReducer;

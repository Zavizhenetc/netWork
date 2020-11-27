const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let  initialState = {
    postsData: [
      {
        id: '1',
        message: 'Hello',
        likesCount: '10',
      },
      {
        id: '2',
        message: 'first',
        likesCount: '5',
      },
      {
        id: '3',
        message: 'second',
        likesCount: '20',
      },
    ],
    newPostText: 'newPostText',
  

} 

const contentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPosts = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPosts);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default contentPageReducer;

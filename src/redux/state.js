
import {renderEntireTree} from '../render.js'

let state ={
  contentPage:{
    postsData:[
      {
        id: "1",
        message: "Hello",
        likesCount: "10",
      },
      {
        id: "2",
        message: "first",
        likesCount: "5",
      },
      {
        id: "3",
        message: "second",
        likesCount: "20",
      },
    ],
  },
 
messagesPages:{
  messages:[
    {
    message: "Hello",
    id:'1'
  },
    {
    message: "whatsUpp",
    id:'2'
  },
    {
    message: "How are you?",
    id:'3'
  }
  ],
  dialogs: [
    {
      id: "1",
      name: "ALex",
    },
    {
      id: "2",
      name: "Dima",
    },
    {
      id: "3",
      name: "Serg",
    },
    {
      id: "4",
      name: "Dasha",
    },
  ],
},
  

  
}

export let addPost =(postMessage) => {
  let newPosts = {
    id: 4,
    message: postMessage, 
    likesCount: 0,
  };
   state.contentPage.postsData.push(newPosts);
   renderEntireTree(state);
}


export default state;
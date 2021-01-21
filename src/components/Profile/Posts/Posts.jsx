import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const  Posts= React.memo(props=> {
  console.log('test')
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id}/>
  ));
  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  const maxLength10 = maxLengthCreator(10);
  const AddNewPostForm = (props) => {
    return (
      <form className={styles.input} onSubmit={props.handleSubmit}>
        <Field className={styles.addPost} name='newPostText' placeholder='что у вас нового' component={Textarea}
               validate={[required, maxLength10]}/>
        <button className={styles.button}>Add post</button>
      </form>
    )
  }
  const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
  return (
    <div className={styles.posts}>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      {postsElements}
    </div>
  );
});

export default Posts;

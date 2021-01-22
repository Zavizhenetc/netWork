import {render} from "@testing-library/react";
import App from "../App";
import React from "react";
import profilePageReducer, {addPostActionCreator, deletePost} from "./profilePageReducer";

const state = {
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
  ]
}


test('new post should be added', () => {
  //1.готовим исходные данные
  const action  = addPostActionCreator('test Text')
  //2. екшен
  const newState = profilePageReducer(state, action);
  // 3.ожидание

  expect(newState.postsData.length).toBe(4);
});
test('correct message', () => {
  //1.готовим исходные данные
  const action  = addPostActionCreator('test Text')
  //2. екшен
  const newState = profilePageReducer(state, action);
  // 3.ожидание
  expect(newState.postsData[3].message).toBe('test Text');
});
test('delete post', () => {
  //1.готовим исходные данные
  const action  = deletePost(1)
  //2. екшен
  const newState = profilePageReducer(state, action);
  // 3.ожидание
  expect(newState.postsData.length).toBe(3);
});


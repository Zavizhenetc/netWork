import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NetWork from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
   ReactDOM.render(<NetWork />, div);
   ReactDOM.unmountComponentAtNode( div);

});

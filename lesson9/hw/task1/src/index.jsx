import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    age: 10,
    name: 'Tom',
  },
  {
    age: 10,
    name: 'Tom',
  },
  {
    age: 20,
    name: 'Jack',
  },
  {
    age: 30,
    name: 'Andy',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);

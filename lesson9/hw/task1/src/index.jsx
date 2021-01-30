import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: '1',
    age: 10,
    name: 'Tom',
  },
  {
    id: '2',
    age: 10,
    name: 'Tom',
  },
  {
    id: '3',
    age: 20,
    name: 'Jack',
  },
  {
    id: '4',
    age: 30,
    name: 'Andy',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);

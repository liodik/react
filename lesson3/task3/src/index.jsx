import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './avatar.scss';
import "./comment.scss";
import './userInfo.scss'

const rootElement = document.querySelector("#root");


ReactDOM.render(
    <App />,
    rootElement
)

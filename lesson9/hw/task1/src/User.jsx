import React from 'react';

const User = ({ name, age }) => {
  return (
    <li className="user" key={(Math.random() * 1000).toFixed()}>
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};
export default User;

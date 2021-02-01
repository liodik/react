import React from 'react';

const CartTitle = ({ userName, count }) => {
  return (
    <h3 className="cart-title">{`${userName.firstName} ${userName.lastName}, you added ${count} items`}</h3>
  );
};

export default CartTitle;

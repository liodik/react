import React from 'react';

const CartTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">{`${userName.firstName} ${userName.lastName}, you added ${count} products`}</div>
  );
};

export default CartTitle;

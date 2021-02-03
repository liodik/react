import React from 'react';

const Contascts = ({ match }) => {
  return <div className="product">${match.params.productId}</div>;
};
export default Contascts;

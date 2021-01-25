import React from 'react';

const Spinner = ({ size }) => {
  let style = { height: [size] };
  return (
    <div className="spinner" style={style}>
      Spinner
    </div>
  );
};
export default Spinner;

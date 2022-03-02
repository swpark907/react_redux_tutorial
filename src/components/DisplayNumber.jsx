import React from 'react';
import { useSelector } from 'react-redux';

const DisplayNumber = () => {

  const {number} = useSelector(state => ({number: state.counter.number}) );

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly />
    </div>
  );
};

export default DisplayNumber;
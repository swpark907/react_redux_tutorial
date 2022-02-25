import React from 'react';
import DisplayNumber from './DisplayNumber';

const DisplayNumberRoot = ({number}) => {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={number}></DisplayNumber>
    </div>
  );
};

export default DisplayNumberRoot;
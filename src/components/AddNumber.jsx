import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import store, { increaseCount, setDiff } from '../store';

const AddNumber = (props) => {

  const dispatch = useDispatch();
  const {number, diff} = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  console.log(number, diff);

  const onIncrease = () => {
    dispatch(increaseCount());
  }

  const onSetDiff = e => {
    console.log(e.target.value);
    dispatch(setDiff(Number(e.target.value)));
  }

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={onIncrease}/>
      <input type="text" value={diff} onChange={onSetDiff} />
    </div>
  );
};

export default AddNumber;
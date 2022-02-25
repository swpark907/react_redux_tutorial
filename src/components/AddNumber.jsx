import React, { useState } from 'react';

const AddNumber = (props) => {

  const [size, setSize] = useState(0);

  function sizeChange (e) {
    setSize(Number(e.target.value));
  }

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={function(){
        props.onClick(size)}}/>
      <input type="text" defaultValue="0" onChange={sizeChange}/>
    </div>
  );
};

export default AddNumber;
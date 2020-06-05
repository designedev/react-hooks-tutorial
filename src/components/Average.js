import React, { useState } from 'react';

const getAverage = (list) => {
  console.log("calculating average..");
  if (list.length === 0 ) return 0;
  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  }

  const addList = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }

  const getLi = list.map((e, index) => <li key={index}>{e}</li>)

  return (
    <div>
      {getLi}
      <input name='number' value={number} onChange={onChange} />
      <button onClick={addList}>ADD</button>
      <p>AVERAGE : {getAverage(list)}</p>
    </div>
  );
};
export default Average;
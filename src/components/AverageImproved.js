import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (list) => {
  console.log("calculating average..(useMemo)");
  if (list.length === 0 ) return 0;
  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};


const AverageImproved = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  }

  const addList = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const getLi = list.map((e, index) => <li key={index}>{e}</li>)
  const avg = useMemo(() => {
    return getAverage(list)
  }, [list]);

  return (
    <div>
      {getLi}
      <input name='number' value={number} onChange={onChange} />
      <button onClick={addList}>ADD</button>
      <p>AVERAGE : {avg}</p>
    </div>
  );
};
export default AverageImproved;
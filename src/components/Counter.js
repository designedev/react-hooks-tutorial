import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('rendered');
    console.log({value});
    return () => {
      console.log('cleanup');
      console.log({value});
    }
  });

  return (
    <div>
      <p>current value is : {value}</p>
      <button onClick={() => setValue(value +1)}>PLUS</button>
      <button onClick={() => setValue(value -1)}>MINUS</button>
    </div>
  );
};

export default Counter;

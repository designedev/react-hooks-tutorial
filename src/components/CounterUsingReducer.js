import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  //action.type 에 따른 작업 수행.
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default:
      return state;
  }
}

const CounterUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  useEffect(() => {
    console.log('rendered');
    console.log({value: state.value});
    return () => {
      console.log('cleanup');
      console.log({value: state.value});
    }
  });
  
  return (
    <div>
      <p> current value is : {state.value}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
    </div>
  );
};


export default CounterUsingReducer;
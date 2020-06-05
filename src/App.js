import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterUsingReducer from './components/CounterUsingReducer';
import Info from './components/Info';
import InfoUsingReducer from './components/InfoUsingReducer';
import Average from './components/Average';
import AverageImproved from './components/AverageImproved';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide!' : 'Show!'}</button>
        {visible? <Counter /> : ''}
        {visible? <CounterUsingReducer /> : ''}
        {visible? <Info /> : ''}
        {visible? <InfoUsingReducer /> : ''}
        {visible? <Average /> : ''}
        {visible? <AverageImproved /> : ''}
    </div>
  );
}

export default App;

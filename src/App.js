import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatcher] = React.useState(0);
  return (
    <div className="App">
      <div className={`image-container ${state === 0 ? 'triangle' : (state === 1 ? '' : 'circle')}`} />
      <div className="controller">
        <button className="button" onClick={() => dispatcher(state + 1 <= 2 ? state + 1 : state)}>転がる</button>
        <button className="button" onClick={() => dispatcher(state - 1 >= 0 ? state - 1 : state)}>転がらない</button>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Circle from './Circle';

const App = () => {
  return (
    <div>
      <Circle borderColor='yellow' bgColor='teal' />
      <Circle text='I am here' bgColor='tomato' />
    </div>
  );
};

export default App;

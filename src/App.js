import React from 'react';
import { Button, message } from 'antd';
import './App.scss';
import './App.less';

function App() {
  const handleClick = () => {
    message.info('Welcome to the App');
  }

  return (
    <div className="App">
      <h1>App</h1>
      <Button type='primary' onClick={handleClick}>Click Here!!</Button>
    </div>
  );
}

export default App;

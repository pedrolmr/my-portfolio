import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Global from './components/globals/GlobalStyles';

const App = () => {
  return (
    <div className='App'>
      <Global />
      <Main />
    </div>
  );
};

export default App;

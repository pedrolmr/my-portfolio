import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Global from './components/globals/GlobalStyles';

import { useRouteMatch, useParams } from 'react-router-dom';

const App = () => {
  const match = useRouteMatch('/:project');
  console.log('Match in App', match);
  return (
    <div className='App'>
      <Global />
      <Main />
    </div>
  );
};

export default App;

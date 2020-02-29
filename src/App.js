import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Global from './components/globals/GlobalStyles';

import ProjectPage from './components/ProjectPage';
import Navigation from './components/Navigation';

import data from './data';

const initialData = data;

const App = () => {
  const [dataArr, setData] = useState([]);

  useEffect(() => {
    setData(initialData);
  }, [dataArr]);

  return (
    <div className='App'>
      <Global />
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Main data={dataArr} />
        </Route>

        <Route exact path='/:project'>
          <ProjectPage data={dataArr} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

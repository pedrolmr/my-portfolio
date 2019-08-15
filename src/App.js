import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Global from './components/globals/GlobalStyles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global />
        <Main/>
      </div>
    );
  }
}

export default App;

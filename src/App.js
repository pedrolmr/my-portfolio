import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Route exact path="/" render={props => <HomePage {...props}/>}/>
        <Route path="/about" render={props => <AboutPage {...props} />} />
        <Route path="/projects" render={props => <ProjectsPage {...props} />} />
        <Route path="/contact" render={props => <ContactPage {...props} />} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'

import projects from './Data';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.setState({ data: projects });
  }

  render() {
    return (
      <div className="App">
       <Header />
        <Route 
          exact path="/" 
          render={props => <HomePage {...props} 
          data={this.state.data}/>}
        />
        <Route path="/about" render={props => <AboutPage {...props} />} />
        <Route 
          path="/projects" 
          render={props => <ProjectsPage {...props} 
          data={this.state.data}/>} 
        />
        <Route path="/contact" render={props => <ContactPage {...props} />} />
      </div>
    );
  }
}

export default App;

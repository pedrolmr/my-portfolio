import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faEnvelopeSquare,
  faAngleDoubleDown,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faEnvelopeSquare,
  faAngleDoubleDown,
  faArrowLeft
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

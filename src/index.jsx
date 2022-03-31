import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Movielist from './components/Movielist';


import camera from './img/camera.svg';

import movies from './movies.js';

const App = () => {
  return (
  <>
   <Header image={camera}/>
   <Movielist movies={movies} />
  </>
)
};

render(<App />, document.querySelector('#app'));

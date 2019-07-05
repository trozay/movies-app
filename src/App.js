import React from 'react';
import Header from './components//Header'
import Home from './components/pages/Home'
import { Router } from '@reach/router'
import './css/App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Home path='/' />
      </Router>
    </div >
  );
}

export default App;

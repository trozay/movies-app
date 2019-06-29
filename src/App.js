import React from 'react';
import Header from './components//Header'
import Home from './components/pages/Home'
import './App.css';
import { Router } from '@reach/router'

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

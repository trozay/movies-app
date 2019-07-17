import React from 'react';
import Home from './components/pages/Home'
import SingleMovieInfo from './components/SingleMovieInfo.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import { Router } from '@reach/router'
import './css/App.css';

function App() {
  return (
    <div className='app'>
      <div className='line-at-top' />
      <Header />
      <Router>
        <Home path='/' />
        <SingleMovieInfo path='/movies/:movie_id/details' />
      </Router>
      <Footer />
    </div >
  );
}

export default App;

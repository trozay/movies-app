import React from 'react';
import Home from './components/pages/Home'
import MovieInfo from './components/MovieInfo.jsx'
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
        <MovieInfo path='/movies/details/:movie_id' />
      </Router>
      <Footer />
    </div >
  );
}

export default App;

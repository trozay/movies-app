import React from 'react';
import Home from './components/pages/home/Home'
import Movies from './components/pages/movies-page/movies'
import SingleMovieInfo from './components/pages/single-movie/SingleMovieInfo'
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
        <Movies path='/movies' pageToShow='popular' />
        <Movies path='/movies/top-rated' pageToShow='top-rated' />
        <Movies path='/movies/upcoming' pageToShow='upcoming' />
        <Movies path='/movies/now-playing' pageToShow='now-playing' />
        <SingleMovieInfo path='/movies/:movie_id/details' />
      </Router>
      <Footer />
    </div >
  );
}

export default App;

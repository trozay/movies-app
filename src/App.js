import React from 'react';
import Home from './components/pages/home/Home'
import Movies from './components/pages/movies-page/Movies'
import TvPage from './components/pages/tv-page/TvPage'
import SingleMovieInfo from './components/pages/single-movie/SingleMovieInfo'
import Header from './components/Header'
import Footer from './components/Footer'
import { Router } from '@reach/router'
import './css/App.css';
import SingleTvShowInfo from './components/pages/single-tv-show/SingleTvShowInfo';
import ShowPeople from './components/pages/people/ShowPeople';

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
        <TvPage path='/tv' pageToShow='popular' />
        <TvPage path='/tv/top-rated' pageToShow='top-rated' />
        <TvPage path='/tv/upcoming' pageToShow='upcoming' />
        <TvPage path='/tv/now-playing' pageToShow='now-playing' />
        <SingleMovieInfo path='/movies/:movie_id/details' />
        <SingleTvShowInfo path='/tv/:tvShow_id/details' />
        <ShowPeople path='people' />
      </Router>
      <Footer />
    </div >
  );
}

export default App;

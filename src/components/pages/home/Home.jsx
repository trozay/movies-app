import React, { Component } from 'react'
import MovieBanner from './MovieBanner'
import { getPopularMovies, getPopularTvSeries, getGenres } from '../../../utils'
import './home-page.css'
import HomeShowBest from './HomeShowbest';

export default class Home extends Component {
  state = {
    popularMovies: null,
    popularTvShows: null,
    genres: null
  };

  componentDidMount() {
    getPopularMovies()
      .then(popularMovies => {
        this.setState({ popularMovies })
        return getPopularTvSeries()
      })
      .then(popularTvShows => {
        this.setState({ popularTvShows })
        return getGenres()
      })
      .then(genres => {
        this.setState({ genres })
      });
  };

  render() {
    const { popularMovies, popularTvShows, genres } = this.state;
    return (
      <div>
        <MovieBanner genres={genres} />
        <div className='home-page-categories'>
          <div className='popular-movies'>
            <HomeShowBest title='Popular Movies' data={popularMovies} genres={genres} />
          </div>
          <div className='popular-tv'>
            <HomeShowBest title='Popular Tv Series' data={popularTvShows} genres={genres} />
          </div>
        </div>
      </div >
    )
  }
}

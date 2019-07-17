import React, { Component } from 'react'
import MovieBanner from '../MovieBanner'
import { getPopularMovies, getPopularTvSeries, getTopRatedMovies, getTopRatedTvSeries } from '../../utils'
import '../../css/home-page.css'
import HomeShowBest from './HomeShowbest';

export default class Home extends Component {
  state = {
    popularMovies: null,
    popularTvShows: null,
    topRatedMovies: null,
    topRatedTvSeries: null
  };

  componentDidMount() {
    getPopularMovies()
      .then(popularMovies => {
        this.setState({ popularMovies })
        return getPopularTvSeries()
      })
      .then(popularTvShows => {
        this.setState({ popularTvShows })
        return getTopRatedMovies()
      })
      .then(topRatedMovies => {
        this.setState({ topRatedMovies })
        return getTopRatedTvSeries()
      })
      .then(topRatedTvSeries => {
        this.setState({ topRatedTvSeries })
      });
  };

  render() {
    const { popularMovies, popularTvShows, topRatedMovies, topRatedTvSeries } = this.state;
    return (
      <div>
        <MovieBanner />
        <div className='home-page-categories'>
          <div className='popular-movies'>
            <HomeShowBest title='Popular Movies' data={popularMovies} />
          </div>
          <div className='popular-tv'>
            <HomeShowBest title='Popular Tv Series' data={popularTvShows} />
          </div>
          <div className='top-movies'>
            <HomeShowBest title='Top Rated Movies' data={topRatedMovies} />
          </div>
          <div className='top-tv'>
            <HomeShowBest title='Top Rated Tv Series' data={topRatedTvSeries} />
          </div>
        </div>
      </div>
    )
  }
}

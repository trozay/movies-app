import React, { Component } from 'react'
import MovieBanner from '../MovieBanner'
import MovieCarousel from '../MovieCarousel';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../utils'
import '../../css/App.css'

export default class Home extends Component {
  state = {
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null
  };

  componentDidMount() {
    getPopularMovies()
      .then(popularMovies => {
        this.setState({ popularMovies })
        return getTopRatedMovies()
      })
      .then(topRatedMovies => {
        this.setState({ topRatedMovies })
        return getUpcomingMovies()
      })
      .then(upcomingMovies => {
        this.setState({ upcomingMovies })
      })
  };

  render() {
    const { popularMovies, topRatedMovies, upcomingMovies } = this.state;
    return (
      <div>
        <MovieBanner />
        <div className='carousels'>
          <MovieCarousel carousel_name='Popular Movies' movies={popularMovies} />
          <MovieCarousel carousel_name='Top Rated' movies={topRatedMovies} />
          <MovieCarousel carousel_name='Upcoming' movies={upcomingMovies} />
        </div>
      </div>
    )
  }
}

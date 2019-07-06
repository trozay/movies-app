import React, { Component } from 'react'
import { getUpcomingMovies } from '../utils'
import MovieCarousel from './MovieCarousel';
import '../css/App.css'

export default class UpcomingCarousel extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    getUpcomingMovies()
      .then(movies => this.setState({ movies }))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className='carousel'>
        <h3>Upcoming</h3>
        <MovieCarousel movies={movies} />
      </div>
    )
  }
}
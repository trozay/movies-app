import React, { Component } from 'react'
import { getPopularMovies } from '../utils'
import MovieCarousel from './MovieCarousel';
import '../css/App.css'

export default class PopularMoviesCarousel extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    getPopularMovies()
      .then(movies => this.setState({ movies }))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className='carousel'>
        <h3>Popular Movies</h3>
        <MovieCarousel movies={movies} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { getTopRatedMovies } from '../utils'
import MovieCarousel from './MovieCarousel';
import '../css/App.css'

export default class TopRatedCarousel extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    getTopRatedMovies()
      .then(movies => this.setState({ movies }))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className='carousel'>
        <h3>Top Rated</h3>
        <MovieCarousel movies={movies} />
      </div>
    )
  }
}

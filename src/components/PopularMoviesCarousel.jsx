import React, { Component } from 'react'
import { getPopularMovies } from '../utils'

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
      <div>

      </div>
    )
  }
}

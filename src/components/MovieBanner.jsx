import React, { Component } from 'react'
import { getLatestMovies } from '../utils'

export default class MovieBanner extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    getLatestMovies()
      .then(movies => {
        this.setState({ movies: movies.slice(0, 5) })
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <ul>
          {movies && movies.map(movie => {
            return <li key={movie.id}>{movie.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

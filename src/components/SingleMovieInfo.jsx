import React, { Component } from 'react'
import { getSingleMovieDetails } from '../utils';
import MovieDetails from './MovieDetails'
import '../css/singleMovieInfo.css';

export default class SingleMovieInfo extends Component {
  state = {
    movieDetails: null,
  };

  componentDidMount() {
    const { movie_id } = this.props
    getSingleMovieDetails(movie_id)
      .then(movieDetails => this.setState({ movieDetails }))
  }

  render() {
    const { movieDetails } = this.state;
    return (
      <div>
        <MovieDetails movieDetails={movieDetails} />
      </div>
    )
  }
}


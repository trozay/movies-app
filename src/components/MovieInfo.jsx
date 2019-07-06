import React, { Component, Fragment } from 'react'
import { getMovieDetails } from '../utils';
import '../css/movieInfo.css'
import CastCarousel from './CastCarousel';

export default class MovieInfo extends Component {
  state = {
    movieDetails: null
  };

  componentDidMount() {
    const { movie_id } = this.props
    getMovieDetails(movie_id)
      .then(movieDetails => this.setState({ movieDetails }))
  }

  render() {
    const { movieDetails } = this.state;
    const { movie_id } = this.props
    return (
      <Fragment>
        {movieDetails && <div className='movie-info-page'>
          <img src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} alt={movieDetails.title} className='movie-backdrop' />
          <div className='main-movie-details'>
            <img src={`https://image.tmdb.org/t/p/w154/${movieDetails.poster_path}`} alt={movieDetails.title} className='movie-poster' />
            <h1 className='movie-title'>{movieDetails.title}</h1>
          </div>
          <section className='sub-movie-details'>
            <h3>Summary</h3>
            <h4>{movieDetails.overview}</h4>
          </section>
          <section className='cast-carousel'>
            <h3>Cast</h3>
            <CastCarousel movie_id={movie_id} />
          </section>
        </div>}
      </Fragment>
    )
  }
}


import React, { Component } from 'react'
import { getSingleMovieDetails, getCastByMovieId, getRelatedMovies } from '../../../utils';
import { Link } from '@reach/router';
import moment from "moment";
import './singleMovieInfo.css';

export default class SingleMovieInfo extends Component {
  state = {
    movieDetails: null,
    cast: null,
    relatedMovies: null
  };

  componentDidMount() {
    const { movie_id } = this.props
    getSingleMovieDetails(movie_id)
      .then(movieDetails => {
        this.setState({ movieDetails })
        return getRelatedMovies(movie_id)
      })
      .then(relatedMovies => {
        this.setState({ relatedMovies })
        return getCastByMovieId(movie_id);
      })
      .then(cast => this.setState({ cast }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { movie_id } = this.props
    if (movie_id !== prevProps.movie_id) {
      getSingleMovieDetails(movie_id)
        .then(movieDetails => {
          this.setState({ movieDetails })
          return getRelatedMovies(movie_id)
        })
        .then(relatedMovies => {
          this.setState({ relatedMovies })
          return getCastByMovieId(movie_id);
        })
        .then(cast => this.setState({ cast }))
    }
  }

  render() {
    const { movieDetails, cast, relatedMovies } = this.state;
    const backgroundImg = movieDetails && `linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}) no-repeat center center / cover`;
    return (
      <div>
        {movieDetails && <div className='main-page'>
          <div className='main-section' style={{ background: backgroundImg }}>
            <div className='main-info'>
              <div className='col1'>
                <h1>{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
              </div>
              <div className='col2'>
                <ul>
                  <li>
                    <h4>genre</h4>
                    {movieDetails.genres &&
                      movieDetails.genres
                        .slice(0, 3)
                        .map(genre => <p key={genre.id}>{genre.name}</p>)}
                  </li>
                  <li>
                    <h4>movie length</h4>
                    <p>{this.getDuration(movieDetails.runtime)}</p>
                  </li>
                  <li>
                    <h4>country</h4>
                    <p>
                      {movieDetails.production_countries
                        ? movieDetails.production_countries.length === 0
                          ? "US"
                          : movieDetails.production_countries[0].iso_3166_1
                        : "US"}
                    </p>
                  </li>
                  <li>
                    <h4>release date</h4>
                    <p>{moment(movieDetails.release_date).format("ll")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className='cast-section'>
            <h3>Cast</h3>
            <div className='grid-container-cast'>
              {cast && cast.map(person => {
                return <div className='grid-item-cast' key={person.id}>
                  <Link to={`/person/${person.id}`}>
                    {person.profile_path ? <img
                      src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                      alt={person.name}
                      className='item-img'
                    /> : <img
                        src={'https://d2g50grrs5gsgl.cloudfront.net/images/placeholders/default-user-pic-display-fp-25783b166928d6761389e6d34279290e.gif'}
                        alt={person.name}
                        className='default-item-img'
                      />}
                    <div className='item-meta-info-cast'>
                      <h4 className='grid-item-real-name'>{person.name}</h4>
                      <h4 className='grid-item-character'>as {person.character}</h4>
                    </div>
                  </Link>
                </div>
              })}
            </div>
          </section>
          <section className='related-section'>
            <h3>People Also Liked</h3>
            <div className='grid-container-related'>
              {relatedMovies && relatedMovies.map(movie => {
                return <div key={movie.id} className='grid-item-related'>
                  <Link to={`/movies/${movie.id}/details`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                      alt={movie.title}
                      className='item-img'
                    />
                  </Link>
                </div>
              })}
            </div>
          </section>
        </div>}
      </div>
    )
  }
  getDuration = num => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}min`;
  };
}


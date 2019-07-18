import React, { Component } from 'react'
import { getPopularMovies, getTopRatedMovies, getLatestMovies, getMoviesPlayingNow } from '../../../utils';
import { Link } from '@reach/router'
import './moviePage.css'

export default class movies extends Component {
  state = {
    page: 1,
    movies: null
  };

  componentDidMount() {
    const { pageToShow } = this.props;
    const { page } = this.state;
    switch (pageToShow) {
      case 'top-rated':
        getTopRatedMovies(page).then(topRatedMovies => this.setState({ movies: topRatedMovies }));
        break;
      case 'upcoming':
        getLatestMovies(page).then(upcomingMovies => this.setState({ movies: upcomingMovies }));
        break;
      case 'now-playing':
        getMoviesPlayingNow(page).then(moviesPlayingNow => this.setState({ movies: moviesPlayingNow }));
        break;
      default:
        getPopularMovies(page)
          .then(popularMovies => this.setState({ movies: popularMovies }))
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props
    const { pageToShow } = this.props
    const prevPageToShow = prevProps.pageToShow
    if (prevPageToShow !== pageToShow) {
      switch (pageToShow) {
        case 'top-rated':
          getTopRatedMovies(page).then(topRatedMovies => this.setState({ movies: topRatedMovies }));
          break;
        case 'upcoming':
          getLatestMovies(page).then(upcomingMovies => this.setState({ movies: upcomingMovies }));
          break;
        case 'now-playing':
          getMoviesPlayingNow(page).then(moviesPlayingNow => this.setState({ movies: moviesPlayingNow }));
          break;
        default:
          getPopularMovies(page)
            .then(popularMovies => this.setState({ movies: popularMovies }))
          break;
      }
    }
  }

  render() {
    const { movies } = this.state;
    console.log(movies)
    return (
      <div className='movies-container'>
        <h2>Popular Movies</h2>
        <div className='movies-grid'>
          {movies && movies.map(movie => {
            return <div className='movie-grid-item' key={movie.id}>
              <Link to={`/movies/${movie.id}/details`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={movie.title}
                  className='movie-img'
                />
              </Link>
              <div className='movie-meta-info'>
                <div className='top-section'>
                  <h4 className='grid-movie-rating'>{movie.vote_average}</h4>
                  <div className='title-release'>
                    <Link to={`/movies/${movie.id}/details`}>
                      <h4 className='grid-movie-title'>{movie.title}</h4>
                    </Link>
                    <h6 className='grid-movie-release'>{movie.release_date}</h6>
                  </div>
                </div>
                <p className='movie-overview'>{movie.overview}</p>
                <div className='more-info-box'>
                  <hr />
                  <Link to={`/movies/${movie.id}/details`}>
                    <p>More Info</p>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

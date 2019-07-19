import React, { Component } from 'react'
import { getPopularMovies, getTopRatedMovies, getLatestMovies, getMoviesPlayingNow } from '../../../utils';
import { Link } from '@reach/router'
import './moviePage.css'

export default class Movies extends Component {
  state = {
    page: 1,
    movies: null,
    total_pages: null
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
          .then(([popularMovies, total_pages]) => this.setState({ movies: popularMovies, total_pages }))
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state
    const prevPage = prevState.page
    const { pageToShow } = this.props
    const prevPageToShow = prevProps.pageToShow
    if (prevPageToShow !== pageToShow || page !== prevPage) {
      switch (pageToShow) {
        case 'top-rated':
          getTopRatedMovies(page).then(([topRatedMovies, total_pages]) => this.setState({ movies: topRatedMovies, total_pages }));
          break;
        case 'upcoming':
          getLatestMovies(page).then(([upcomingMovies, total_pages]) => this.setState({ movies: upcomingMovies, total_pages }));
          break;
        case 'now-playing':
          getMoviesPlayingNow(page).then(([moviesPlayingNow, total_pages]) => this.setState({ movies: moviesPlayingNow, total_pages }));
          break;
        default:
          getPopularMovies(page)
            .then(([popularMovies, total_pages]) => this.setState({ movies: popularMovies, total_pages }))
          break;
      }
    }
  }

  render() {
    const { movies, total_pages, page } = this.state;
    let { pageToShow } = this.props
    pageToShow = pageToShow
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return (
      <div className='movies-container'>
        <h2>{pageToShow}</h2>
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
                  <Link to={`/movies/${movie.id}/details`}>
                    <p>More Info</p>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>
        {movies && <div className='page-tabs'>
          <button onClick={() => this.handlePageChange(1)} className='btn page-buttons'>{'<<'}</button>
          {[0, 1, 2, 3, 4, 5].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`}>{num + page}</button>
          })}
          <button onClick={() => this.handlePageChange(total_pages)} className='btn page-buttons'>{'>>'}</button>
        </div>}
      </div>
    )
  }

  handlePageChange = pageNumber => {
    this.setState({ page: pageNumber });
  };
};

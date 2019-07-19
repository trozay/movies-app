import React, { Component } from 'react';
import { Link } from "@reach/router";
import { getPopularTvSeries, getTopRatedTvseries, getLatestTvSeries, getTvSeriesPlayingNow } from '../../../utils';
import './tvPage.css';

export default class TvPage extends Component {
  state = {
    page: 1,
    tvSeries: null,
    total_pages: null
  };

  componentDidMount() {
    const { pageToShow } = this.props;
    const { page } = this.state;
    switch (pageToShow) {
      case 'top-rated':
        getTopRatedTvseries(page).then(([topRatedMovies, total_pages]) => this.setState({ tvSeries: topRatedMovies, total_pages }));
        break;
      case 'upcoming':
        getLatestTvSeries(page).then(([upcomingMovies, total_pages]) => this.setState({ tvSeries: upcomingMovies, total_pages }));
        break;
      case 'now-playing':
        getTvSeriesPlayingNow(page).then(([tvSeriesPlayingNow, total_pages]) => this.setState({ tvSeries: tvSeriesPlayingNow, total_pages }));
        break;
      default:
        getPopularTvSeries(page)
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
          getTopRatedTvseries(page).then(([topRatedMovies, total_pages]) => this.setState({ tvSeries: topRatedMovies, total_pages }));
          break;
        case 'upcoming':
          getLatestTvSeries(page).then(([upcomingMovies, total_pages]) => this.setState({ tvSeries: upcomingMovies, total_pages }));
          break;
        case 'now-playing':
          getTvSeriesPlayingNow(page).then(([tvSeriesPlayingNow, total_pages]) => this.setState({ tvSeries: tvSeriesPlayingNow, total_pages }));
          break;
        default:
          getPopularTvSeries(page)
            .then(([popularMovies, total_pages]) => this.setState({ movies: popularMovies, total_pages }))
          break;
      }
    }
  }

  render() {
    const { tvSeries, total_pages, page } = this.state;
    console.log(tvSeries)
    let { pageToShow } = this.props
    pageToShow = pageToShow
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return (
      <div className='tv-series-container'>
        <h2>{pageToShow}</h2>
        <div className='tv-series-grid'>
          {tvSeries && tvSeries.map(tvShow => {
            return <div className='tv-grid-item' key={tvShow.id}>
              <Link to={`/tv/${tvShow.id}/details`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${tvShow.poster_path}`}
                  alt={tvShow.title}
                  className='tvShow-img'
                />
              </Link>
              <div className='tv-meta-info'>
                <div className='top-section'>
                  <h4 className='grid-tv-rating'>{tvShow.vote_average}</h4>
                  <div className='title-release'>
                    <Link to={`/tv/${tvShow.id}/details`}>
                      <h4 className='grid-tv-title'>{tvShow.title}</h4>
                    </Link>
                    <h6 className='grid-tv-release'>{tvShow.release_date}</h6>
                  </div>
                </div>
                <p className='tv-overview'>{tvShow.overview}</p>
                <div className='more-info-box'>
                  <Link to={`/tv/${tvShow.id}/details`}>
                    <p>More Info</p>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>
        {tvSeries && <div className='page-tabs'>
          <button onClick={() => this.handlePageChange(1)} className='btn page-buttons'>{'<<'}</button>
          <button onClick={() => this.handlePageChange(page - 1)} className='btn page-buttons'>{'<'}</button>
          {page < 3 && [0, 1, 2, 3, 4].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          {page === total_pages && [0, 1, 2, 3, 4].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          {page > 2 && page < total_pages && [-2, -1, 0, 1, 2].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          <button onClick={() => this.handlePageChange(page + 1)} className='btn page-buttons'>{'>'}</button>
          <button onClick={() => this.handlePageChange(total_pages)} className='btn page-buttons'>{'>>'}</button>
        </div>}
      </div>
    )
  }

  handlePageChange = pageNumber => {
    this.setState({ page: pageNumber });
  };
}

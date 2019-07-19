import React, { Component } from 'react'
import { getSingleTvShowDetails, getCastByTvShowId, getRelatedTvShows } from '../../../utils';
import { Link } from '@reach/router';
import moment from "moment";
import './singleTvInfo.css';

export default class SingleTvShowInfo extends Component {
  state = {
    tvDetails: null,
    cast: null,
    relatedTvSeries: null
  };

  componentDidMount() {
    const { tvShow_id } = this.props
    getSingleTvShowDetails(tvShow_id)
      .then(tvDetails => {
        this.setState({ tvDetails })
        return getRelatedTvShows(tvShow_id)
      })
      .then(relatedTvSeries => {
        this.setState({ relatedTvSeries })
        return getCastByTvShowId(tvShow_id);
      })
      .then(cast => this.setState({ cast }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { tvShow_id } = this.props
    if (tvShow_id !== prevProps.tvShow_id) {
      getSingleTvShowDetails(tvShow_id)
        .then(tvDetails => {
          this.setState({ tvDetails })
          return getRelatedTvShows(tvShow_id)
        })
        .then(relatedTvSeries => {
          this.setState({ relatedTvSeries })
          return getCastByTvShowId(tvShow_id);
        })
        .then(cast => this.setState({ cast }))
    }
  }

  render() {
    const { tvDetails, cast, relatedTvSeries } = this.state;
    const backgroundImg = tvDetails && `linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path}) no-repeat center center / cover`;
    return (
      <div>
        {tvDetails && <div className='main-page'>
          <div className='main-section' style={{ background: backgroundImg }}>
            <div className='main-info'>
              <div className='col1'>
                <h1>{tvDetails.original_name}</h1>
                <p>{tvDetails.overview}</p>
              </div>
              <div className='col2'>
                <ul>
                  <li>
                    <h4>genre</h4>
                    {tvDetails.genres &&
                      tvDetails.genres
                        .slice(0, 3)
                        .map(genre => <p key={genre.id}>{genre.name}</p>)}
                  </li>
                  <li>
                    <h4>movie length</h4>
                    <p>{this.getDuration(tvDetails.runtime)}</p>
                  </li>
                  <li>
                    <h4>country</h4>
                    <p>
                      {tvDetails.production_countries
                        ? tvDetails.production_countries.length === 0
                          ? "US"
                          : tvDetails.production_countries[0].iso_3166_1
                        : "US"}
                    </p>
                  </li>
                  <li>
                    <h4>release date</h4>
                    <p>{moment(tvDetails.release_date).format("ll")}</p>
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
              {relatedTvSeries && relatedTvSeries.map(movie => {
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
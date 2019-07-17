import React, { Component } from 'react'
import { getSingleMovieDetails } from '../utils';
import moment from "moment";
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
    const backgroundImg = movieDetails && `linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}) no-repeat center center / cover`;
    // console.log(backgroundImg, 'LLL')
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


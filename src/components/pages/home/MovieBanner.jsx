import React, { Component } from 'react'
import { getLatestMovies } from '../../../utils'
import { Link } from '@reach/router'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './movieBanner.css'

export default class MovieBanner extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    getLatestMovies()
      .then(([movies]) => {
        this.setState({ movies: movies.slice(0, 8) })
      })
  }

  render() {
    const { movies } = this.state;
    const { genres } = this.props;
    const settings = {
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6500,
      // vertical: true,
      // verticalSwiping: true
    };
    return (
      <div>
        <Slider className='slider-wrapper' {...settings}>
          {movies && movies.map((movie, index) =>
            <div
              key={movie.id}
              className="slider-content"
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center center`
              }}
            >
              <div className="inner">
                <p>Now Playing</p>
                <Link to={`/movies/${movie.id}/details`}>
                  <h1>{movie.title}</h1>
                </Link>
                <div className='genres-for-movie'>
                  {genres && movie.genre_ids.map(genre_id => {
                    return <h4 key={genre_id}>{genres[genre_id]}</h4>
                  })}
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    )
  }
}

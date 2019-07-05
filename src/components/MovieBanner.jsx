import React, { Component } from 'react'
import { getLatestMovies, getGenres } from '../utils'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/movieBanner.css'
        
export default class MovieBanner extends Component {
  state = {
    movies: null,
    genres: null
  };

  componentDidMount() {
    getLatestMovies()
      .then(movies => {
        this.setState({ movies: movies.slice(0, 8) })
        return getGenres()
      })
      .then(genres => {
        this.setState({ genres })
      });
  }

  render() {
    const { movies, genres } = this.state;
    console.log(movies)
    return (
      <div>
        <Slider className='slider-wrapper'>
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
                <h1>{movie.title}</h1>
                <div className='genres-for-movie'>
                  {genres && movie.genre_ids.map(genre_id => {
                    return <h4>{genres[genre_id]}</h4>
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

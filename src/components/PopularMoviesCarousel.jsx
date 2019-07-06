import React, { Component, Fragment } from 'react'
import { getPopularMovies } from '../utils'
import { Link } from '@reach/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/PopularMoviesCarousel.css'

export default class PopularMoviesCarousel extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    getPopularMovies()
      .then(movies => this.setState({ movies }))
  }

  render() {
    const { movies } = this.state;
    const settings = {
      dots: false,
      arrows: true,
      slidesToShow: 9,
      infinite: true,
      slidesToScroll: 5,
      // responsive: [
      //   {
      //     breakpoint: 1440,
      //     settings: {
      //       slidesToShow: 8,
      //       slidesToScroll: 1
      //     }
      //   },
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 6,
      //       slidesToScroll: 1
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 5,
      //       slidesToScroll: 1,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1
      //     }
      //   },
      //   {
      //     breakpoint: 320,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };
    return (
      <Fragment>
        <Slider {...settings} className='carousel'>
          {movies &&
            movies.map(movie => (
              <figure key={movie.id} className="h-carousel-item">
                <div className='movie-card'>
                  <Link to={`/movies/details/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <figcaption>
                    <h5 className="truncate truncate-small movie-carousel-subheader">{movie.title}</h5>
                  </figcaption>
                </div>
              </figure>
            ))}
        </Slider>
      </Fragment>
    )
  }
}

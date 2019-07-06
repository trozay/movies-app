import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/PopularMoviesCarousel.css'

const MovieCarousel = props => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 9,
    infinite: true,
    slidesToScroll: 5,
  };
  const { movies } = props;
  return (
    <Fragment>
      <Slider {...settings} >
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
};

export default MovieCarousel;


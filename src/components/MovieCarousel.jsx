import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/PopularMoviesCarousel.css'

const MovieCarousel = ({ movies, carousel_name }) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 6,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Fragment>
      <h3>{carousel_name}</h3>
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


import React, { Component, Fragment } from 'react';
import { getCastByMovieId } from '../utils';
import { Link } from '@reach/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CastCarousel extends Component {
  state = {
    cast: null
  };

  componentDidMount() {
    const { movie_id } = this.props;
    getCastByMovieId(movie_id)
      .then(cast => this.setState({ cast }));
  }
  render() {
    const { cast } = this.state;
    console.log(cast)
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
        <Slider {...settings} >
          {cast &&
            cast.map(actor => (
              <figure key={actor.id} className="h-carousel-item">
                <div className='cast-card'>
                  <Link to={`/actors/details/${actor.cast_id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                      alt={actor.title}
                    />
                  </Link>
                  <figcaption>
                    <Link to={`/actors/details/${actor.cast_id}`}>
                      <h5 className='actor-real-name'>{actor.name}</h5>
                    </Link>
                    <h6 className='charactor-name'>{actor.character.slice(0, -8)}</h6>
                  </figcaption>
                </div>
              </figure>
            ))}
        </Slider>
      </Fragment>
    )
  }
}

import React, { Component } from 'react'
import MovieBanner from '../MovieBanner'
import PopularMoviesCarousel from '../PopularMoviesCarousel';
import TopRatedCarousel from '../TopRatedCarousel';
import UpcomingCarousel from '../UpcomingCarousel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MovieBanner />
        <PopularMoviesCarousel />
        <TopRatedCarousel />
        <UpcomingCarousel />
      </div>
    )
  }
}

import React, { Component } from 'react'
import MovieBanner from '../MovieBanner'
import PopularMoviesCarousel from '../PopularMoviesCarousel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MovieBanner />
        <PopularMoviesCarousel />
      </div>
    )
  }
}

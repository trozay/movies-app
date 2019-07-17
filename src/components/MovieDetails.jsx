import React, { Component } from 'react'
import { ShowMovieDetails } from './ShowMovieDetails';

export default class MovieDetails extends Component {
  state = {
    infoToShow: 'overview'
  }

  render() {
    const { infoToShow } = this.state;
    const { movieDetails } = this.props;
    console.log(movieDetails)
    return (
      <div>
        {movieDetails && infoToShow === 'overview' && <ShowMovieDetails movieDetails={movieDetails} handleTabClick={this.handleTabClick} />}
        {/* {movieDetails && infoToShow === 'cast' && <ShowCast cast={movieDetails} handleTabClick={this.handleTabClick} />} */}
        {movieDetails && infoToShow === 'related' && <ShowMovieDetails movieDetails={movieDetails} handleTabClick={this.handleTabClick} />}
      </div>
    )
  }
  handleTabClick = e => {
    this.setState({ infoToShow: e.target.className })
  };
}

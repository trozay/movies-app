import React, { Component } from 'react'

export default class movies extends Component {
  state = {
    infoToDisplay: 'coming_soon',
    page: 1
  };
  render() {
    const { infoToDisplay } = this.state;
    return (
      <div>
        <div>
          <ul>
            <li>Popular</li>
            <li>Top Rated</li>
            <li>Upcoming</li>
            <li>Now Playing</li>
          </ul>
        </div>
        {/* <BestMoviesOfGenre genre={infoToDisplay} /> */}
      </div>
    )
  }
}

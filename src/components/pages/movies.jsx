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

        {/* <BestMoviesOfGenre genre={infoToDisplay} /> */}
      </div>
    )
  }
}

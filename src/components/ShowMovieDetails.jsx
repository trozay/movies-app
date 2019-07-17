import React from 'react'

export const ShowMovieDetails = props => {
  const { movieDetails, handleTabClick } = props;
  return (
    <div>
      <div className='movie-top-details'>
        <h1>{movieDetails.title}</h1>
        <h4>Home<span> ➞ </span>Movies<span> ➞ </span>{movieDetails.title}</h4>
      </div>
      <div className='main-details'>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className='backdrop-img'
          />
        </div>
        <div className='details'>
          <div className='nav-tabs'>
            <ul>
              <li className='overview' onClick={handleTabClick}>Overview<span> ↓</span></li>
              <li className='cast' onClick={handleTabClick}>Cast<span> ↓</span></li>
              <li className='related' onClick={handleTabClick}>More Like This<span> ↓</span></li>
            </ul>
          </div>
          <div className='info'>
            <div className='info-container'>
              <h3>Release Date</h3>
              <h5>{movieDetails.release_date}</h5>
            </div>
            <div className='info-container'>
              <h3>Country</h3>
              <h5>{movieDetails.production_countries[0].name}</h5>
            </div>
            <div className='info-container'>
              <h3>Runtime</h3>
              <h5>{movieDetails.runtime}</h5>
            </div>
            <div className='info-container'>
              <h3>Movie Overview</h3>
              <h5>{movieDetails.overview}</h5>
            </div>
            <div className='info-container'>
              <h3>Genres</h3>
              <ul className='genre-list'>
                {movieDetails.genres.map((genre, i) => {
                  const comma = i !== movieDetails.genres.length - 1 ? ',' : '';

                  return <li key={genre.id} className='genre-item'>{`${genre.name}${comma}`}</li>
                })}
              </ul>
            </div>
            <div className='info-container'>
              <h3>Rating</h3>
              <h5>{movieDetails.vote_average}/10</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


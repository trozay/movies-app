import React from 'react'
import { Link } from '@reach/router'
import '../css/header.css'

const Header = props => {
  return (
    <header>
      <nav className='nav'>
        <ul className='page-links'>
          <li className='page-link'>
            <Link to='/'>
              <h4>MOVIESDB</h4>
            </Link>
          </li>
          <hr className='vertical-line' />
          <li className='movie-tab page-link'>
            <Link to='/movies'>
              <h4>MOVIES</h4>
            </Link>
            <ul className='movie-dropdown-menu'>
              <Link to={`/movies`}><li className='dropdown-item'>Popular</li></Link>
              <Link to={`/movies/top-rated`}><li className='dropdown-item'>Top Rated</li></Link>
              <Link to={`/movies/upcoming`}><li className='dropdown-item'>Upcoming</li></Link>
              <Link to={`/movies/now-playing`}><li className='dropdown-item'>Now Playing</li></Link>
            </ul>
          </li>
          <li className='tv-tab page-link'>
            <Link to='/tv'>
              <h4>TV SHOWS</h4>
            </Link>
            <ul className='tv-dropdown-menu'>
              <Link to={`/tv`}><li className='dropdown-item'>Popular</li></Link>
              <Link to={`/tv/top-rated`}><li className='dropdown-item'>Top Rated</li></Link>
              <Link to={`/tv/upcoming`}><li className='dropdown-item'>Upcoming</li></Link>
              <Link to={`/tv/now-playing`}><li className='dropdown-item'>Now Playing</li></Link>
            </ul>
          </li>
          <li className='person-tab page-link'>
            <Link to='/people'>
              <h4>PEOPLE</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
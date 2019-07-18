import React from 'react'
import { Link } from '@reach/router'
import '../css/header.css'

const Header = props => {
  return (
    <header>
      <nav className='nav'>
        <ul className='page-links'>
          <li>
            <Link to='/'>
              <h4 className='page-link'>MOVIESDB</h4>
            </Link>
          </li>
          <hr className='vertical-line' />
          <li className='movie-tab'>
            <Link to='/movies'>
              <h4 className='page-link'>MOVIES</h4>
              <ul className='movie-dropdown-menu'>
                <Link to={`/movies`}><li className='dropdown-item'>Popular</li></Link>
                <Link to={`/movies/top-rated`}><li className='dropdown-item'>Top Rated</li></Link>
                <Link to={`/movies/upcoming`}><li className='dropdown-item'>Upcoming</li></Link>
                <Link to={`/movies/now-playing`}><li className='dropdown-item'>Now Playing</li></Link>
              </ul>
            </Link>
          </li>
          <li className='tv-tab'>
            <Link to='/tv'>
              <h4 className='page-link'>TV SHOWS</h4>
              <ul className='tv-dropdown-menu'>
                <Link to={`/movies`}><li className='dropdown-item'>Popular</li></Link>
                <Link to={`/movies/top-rated`}><li className='dropdown-item'>Top Rated</li></Link>
                <Link to={`/movies/upcoming`}><li className='dropdown-item'>Upcoming</li></Link>
                <Link to={`/movies/now-playing`}><li className='dropdown-item'>Now Playing</li></Link>
              </ul>
            </Link>
          </li>
          <li>
            <Link to='/people'>
              <h4 className='page-link'>PEOPLE</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
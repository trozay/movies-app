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
              MOVIESDB
          </Link>
          </li>
          <hr className='vertical-line' />
          <li>
            <Link to='/'>
              HOME
          </Link>
          </li>
          <li>
            <Link to='/movies'>
              MOVIES
          </Link>
          </li>
          <li>
            <Link to='/tv'>
              TV SHOWS
          </Link>
          </li>
          <li>
            <Link to='/people'>
              PEOPLE
          </Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header;
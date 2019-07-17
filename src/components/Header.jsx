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
          <li>
            <Link to='/discover'>
              <h4 className='page-link'>DISCOVER</h4>
            </Link>
          </li>
          <li>
            <Link to='/movies'>
              <h4 className='page-link'>MOVIES</h4>
            </Link>
          </li>
          <li>
            <Link to='/tv'>
              <h4 className='page-link'>TV SHOWS</h4>
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
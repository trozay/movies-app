import React from 'react'
import '../css/footer.css'

const Footer = (params) => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-text'>
          <h3>
            The Moviesdb is a place to search for your favorite movies and tv
            shows. Built with React.
          </h3>
        </div>
        <div className='social-links'>
          <button><a href='https://google.com' target='_blank' rel='noopener noreferrer'>Portfolio</a></button>
          <button><a href='https://github.com/trozay/movies-app' target='_blank' rel='noopener noreferrer'>Github</a></button>
        </div>
        <div className='logo'>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png" alt="imdb logo" className='imdb-logo' />
        </div>
      </div>
    </footer>
  )
}

export default Footer

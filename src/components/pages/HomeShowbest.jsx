import React from 'react'
import { Link } from '@reach/router'

const HomeShowBest = props => {
  const { title, data } = props;
  return (
    <div>
      <h2 className='category-title'>{title}</h2>
      <div className='grid-container'>
        {data && data.slice(0, 12).map(item => {
          return <div className='grid-item'>
            <Link to={`/movies/${item.id}/details`}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                alt={item.title}
                className='item-img'
              />
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default HomeShowBest;


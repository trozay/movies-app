import React from 'react'
import { Link } from '@reach/router'

const HomeShowBest = props => {
  const { title, data, genres } = props;
  const titleKeyName = title === 'Popular Movies' ? 'title' : 'original_name';
  console.log(genres)
  return (
    <div>
      <h2 className='category-title'>{title}</h2>
      <div className='grid-container'>
        {data && data.slice(0, 10).map(item => {
          return <div className='grid-item' key={item.id}>
            <Link to={`/movies/${item.id}/details`}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                alt={item.title}
                className='item-img'
              />
            </Link>
            <div className='item-meta-info'>
              <h4 className='grid-item-title'>{item[`${titleKeyName}`]}</h4>
              <ul className='grid-genres'>
                {genres && item.genre_ids.slice(0, 3).map(genre_id => {
                  return <li key={genre_id} className='grid-item-genre'>{genres[genre_id]}</li>
                })}
              </ul>
              <h4 className='grid-item-rating'>{item.vote_average}</h4>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default HomeShowBest;


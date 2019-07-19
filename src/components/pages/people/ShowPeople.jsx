import React, { Component } from 'react'
import { getPopularPeople } from '../../../utils'
import { Link } from '@reach/router'

export default class ShowPeople extends Component {
  state = {
    people: null,
    page: 1,
    total_pages: null
  };

  componentDidMount() {
    getPopularPeople()
      .then(([people, total_pages]) => this.setState({ people, total_pages }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      getPopularPeople(page)
        .then(([people, total_pages]) => this.setState({ people, total_pages }))
    }
  }

  render() {
    const { people, page, total_pages } = this.state;
    return (
      <div>
        <section className='cast-section'>
          <h3>Popular People</h3>
          <div className='grid-container-cast'>
            {people && people.map(person => {
              return <div className='grid-item-cast' key={person.id}>
                {/* <Link to={`/person/${person.id}`}> */}
                {person.profile_path ? <img
                  src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                  alt={person.name}
                  className='item-img'
                /> : <img
                    src={'https://d2g50grrs5gsgl.cloudfront.net/images/placeholders/default-user-pic-display-fp-25783b166928d6761389e6d34279290e.gif'}
                    alt={person.name}
                    className='default-item-img'
                  />}
                <div className='item-meta-info-cast'>
                  <h4 className='grid-item-real-name'>{person.name}</h4>
                  <h4 className='grid-item-character'>as {person.character}</h4>
                </div>
                {/* </Link> */}
              </div>
            })}
          </div>
        </section>
        {people && <div className='page-tabs'>
          <button onClick={() => this.handlePageChange(1)} className='btn page-buttons'>{'<<'}</button>
          <button onClick={() => this.handlePageChange(page - 1)} className='btn page-buttons'>{'<'}</button>
          {page < 3 && [0, 1, 2, 3, 4].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          {page === total_pages && [0, 1, 2, 3, 4].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          {page > 2 && page < total_pages && [-2, -1, 0, 1, 2].map(num => {
            const highlightButton = num + page === page ? 'highlight-button' : '';
            return <button onClick={() => this.handlePageChange(num + page)} className={`btn page-buttons ${highlightButton}`} key={`page${page + num}`}>{num + page}</button>
          })}
          <button onClick={() => this.handlePageChange(page + 1)} className='btn page-buttons'>{'>'}</button>
          <button onClick={() => this.handlePageChange(total_pages)} className='btn page-buttons'>{'>>'}</button>
        </div>}
      </div>
    )
  }
  handlePageChange = pageNumber => {
    this.setState({ page: pageNumber });
  };
}

import React from 'react'
import './MoviesCardList.css'
import PropTypes from 'prop-types'

import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
  return (
    <section className="card-list">
      <MoviesCard delete={props.delete} disabled={props.disabled} />
      <MoviesCard delete={props.delete} />
      <MoviesCard delete={props.delete} />
      <MoviesCard delete={props.delete} />
      <MoviesCard delete={props.delete} />
      <MoviesCard delete={props.delete} />
      <button type="button" className="card-list__more-button">
        Ещё
      </button>
    </section>
  )
}

MoviesCardList.propTypes = {
  delete: PropTypes.string,
  disabled: PropTypes.string,
}

export default MoviesCardList

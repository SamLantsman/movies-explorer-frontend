import React from 'react'
import './SavedMovies.css'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SideMenue from '../SideMenue/SideMenue'

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <Header savedMoviesActive="active" onClick={props.onClick} />
      <SearchForm />
      <MoviesCardList delete="delete" disabled="disabled" />
      <Footer />
      <SideMenue
        onClose={props.onClose}
        isOpen={props.isOpen}
        savedMoviesActive="active"
        onLinkClick={props.onLinkClick}
      />
    </section>
  )
}

SavedMovies.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onLinkClick: PropTypes.func,
}

export default SavedMovies

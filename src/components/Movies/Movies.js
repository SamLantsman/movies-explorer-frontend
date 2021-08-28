import React from 'react'
import './Movies.css'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SideMenue from '../SideMenue/SideMenue'

function Movies(props) {
  return (
    <>
      <Header moviesActive="active" onClick={props.onClick} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <Footer />
        <SideMenue
          onClose={props.onClose}
          isOpen={props.isOpen}
          moviesActive="active"
          onLinkClick={props.onLinkClick}
        />
      </section>
    </>
  )
}

Movies.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onLinkClick: PropTypes.func,
}

export default Movies

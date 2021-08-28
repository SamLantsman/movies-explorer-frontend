import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../Navigation/Navigation'

function Header(props) {
  return (
    <header className={`header header_${props.sign}`}>
      <Link className="header__image" to="/" />
      <Navigation
        moviesActive={props.moviesActive}
        savedMoviesActive={props.savedMoviesActive}
        accountActive={props.accountActive}
        isHidden={props.isHidden}
        onClick={props.onClick}
      />
    </header>
  )
}

Header.propTypes = {
  moviesActive: PropTypes.string,
  savedMoviesActive: PropTypes.string,
  accountActive: PropTypes.string,
  isHidden: PropTypes.string,
  sign: PropTypes.string,
  onClick: PropTypes.func,
}

export default Header

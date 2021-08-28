import React from 'react'
import './SideMenue.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../Navigation/Navigation'

function SideMenue(props) {
  return (
    <div className={`side-menue ${props.isOpen ? 'side-menue_is-opened' : ''}`}>
      <div className="side-menue__content">
        <button
          type="button"
          className="side-menue__close-button"
          aria-label="close button"
          onClick={props.onClose}
        />
        <NavLink className="side-menue__navigation-link" to="/">
          Главная
        </NavLink>
        <Navigation
          sideMenueActive="is-visible"
          menueIconHidden="is-hidden"
          moviesActive={props.moviesActive}
          savedMoviesActive={props.savedMoviesActive}
          accountActive={props.accountActive}
          onLinkClick={props.onLinkClick}
        />
      </div>
    </div>
  )
}

SideMenue.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  moviesActive: PropTypes.string,
  savedMoviesActive: PropTypes.string,
  accountActive: PropTypes.string,
  onLinkClick: PropTypes.func,
}

export default SideMenue

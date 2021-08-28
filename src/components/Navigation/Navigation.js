import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import PropTypes from 'prop-types'
function Navigation(props) {
  return (
    <nav className={`navigation navigation_${props.isHidden}`}>
      <NavLink
        className={`navigation__link navigation__link_${props.moviesActive} navigation__link_${props.sideMenueActive}`}
        to="/movies"
        onClick={props.onLinkClick}
      >
        Фильмы
      </NavLink>
      <NavLink
        className={`navigation__link navigation__link_${props.savedMoviesActive} navigation__link_${props.sideMenueActive}`}
        to="/saved-movies"
        onClick={props.onLinkClick}
      >
        Сохраненные фильмы
      </NavLink>
      <NavLink
        className={`navigation__link navigation__link_${props.accountActive} navigation__link_${props.sideMenueActive}`}
        to="/profile"
        onClick={props.onLinkClick}
      ></NavLink>
      <button
        type="button"
        aria-label="side-menue button"
        className={`navigation__side-menue navigation__side-menue_${props.menueIconHidden}`}
        onClick={props.onClick}
      />
    </nav>
  )
}

Navigation.propTypes = {
  moviesActive: PropTypes.string,
  savedMoviesActive: PropTypes.string,
  accountActive: PropTypes.string,
  isHidden: PropTypes.string,
  sideMenueActive: PropTypes.string,
  menueIconHidden: PropTypes.string,
  onLinkClick: PropTypes.func,
  onClick: PropTypes.func,
}

export default Navigation

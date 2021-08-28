import React from 'react'
import './InfoToolTip.css'
import PropTypes from 'prop-types'

function InfoToolTip(props) {
  return (
    <div className="popup">
      <div className="popup__content">
        <h1 className="popup__heading">404</h1>
        <h2 className="popup__subheading">Страница не найдена</h2>
        <button type="button" className="popup__button" onClick={props.onClick}>
          Назад
        </button>
      </div>
    </div>
  )
}

InfoToolTip.propTypes = {
  onClick: PropTypes.func,
}

export default InfoToolTip

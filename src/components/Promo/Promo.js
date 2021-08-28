import React from 'react'
import './Promo.css'
import { Link } from 'react-router-dom'
import logo from '../../images/promo__header__logo.svg'
function Promo() {
  return (
    <section className="promo">
      <header className="promo-header">
        <img className="promo-header__image" alt="зеленая клякса" src={logo} />
        <div className="promo-header__navigation">
          <Link
            to="/signup"
            className="promo-header__registration"
            type="button"
          >
            Регистрация
          </Link>
          <Link to="/signin" className="promo-header__login" type="button">
            Войти
          </Link>
        </div>
      </header>
      <h1 className="promo-header__heading">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  )
}

export default Promo

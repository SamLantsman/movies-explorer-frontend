import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
function Register() {
  return (
    <>
      <section className="register">
        <Header
          moviesActive="disabled"
          savedMoviesActive="disabled"
          accountActive="disabled"
          isHidden="is-hidden"
          sign="sign"
        />
        <form className="register__form">
          <h2 className="register__heading">Добро пожаловать!</h2>
          <div className="register__row">
            <p className="register__info">Имя</p>
            <input
              className="register__name register__input"
              placeholder="Виталий"
            />
          </div>
          <div className="register__row">
            <p className="register__info">E-mail</p>
            <input
              className="register__name register__input"
              placeholder="pochta@yandex.ru"
            />
          </div>
          <div className="register__row">
            <p className="register__info">Пароль</p>
            <input
              className="register__input register__password"
              type="password"
            />
          </div>
          <span className="register__password-error">
            Что-то пошло не так...
          </span>
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__redirect">
          <p className="register__redirect-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__redirect-link">
            Войти
          </Link>
        </div>
      </section>
    </>
  )
}

export default Register

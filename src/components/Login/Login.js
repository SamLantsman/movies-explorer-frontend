import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
function Login() {
  return (
    <>
      <section className="login">
        <Header
          moviesActive="disabled"
          savedMoviesActive="disabled"
          accountActive="disabled"
          isHidden="is-hidden"
          sign="sign"
        />
        <form className="login__form">
          <h2 className="login__heading">Рады видеть!</h2>
          <div className="login__row">
            <p className="login__info">E-mail</p>
            <input
              className="login__email login__input"
              placeholder="pochta@yandex.ru"
            />
          </div>
          <div className="login__row">
            <p className="login__info">Пароль</p>
            <input className="login__input login__password" />
          </div>
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <div className="login__redirect">
          <p className="login__redirect-text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__redirect-link">
            Регистрация
          </Link>
        </div>
      </section>
    </>
  )
}

export default Login

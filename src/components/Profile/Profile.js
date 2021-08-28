import React from 'react'
import './Profile.css'
import PropTypes from 'prop-types'
import SideMenue from '../SideMenue/SideMenue'
import Header from '../Header/Header'
function Profile(props) {
  const [isInputDesabled, setInput] = React.useState(true)

  const [name, setName] = React.useState('Виталий')

  const [email, setEmail] = React.useState('pochta@yandex.ru')

  const [button, setButton] = React.useState('Редактировать')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInput(!isInputDesabled)
    if (button === 'Редактировать') {
      setButton('Сохранить')
    } else {
      setButton('Редактировать')
    }
  }

  return (
    <>
      <Header accountActive="active" onClick={props.onClick} />
      <form className="profile" onSubmit={handleSubmit}>
        <div className="profile__tab">
          <h2 className="profile__heading">Привет, {name}!</h2>
          <div className="profile__row">
            <p className="profile__info">Имя</p>
            <input
              type="text"
              className="profile__info profile__name"
              disabled={isInputDesabled ? 'disabled' : ''}
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="profile__row">
            <p className="profile__info">E-mail</p>
            <input
              type="email"
              className="profile__info profile__email"
              value={email}
              disabled={isInputDesabled ? 'disabled' : ''}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className={
            isInputDesabled
              ? 'profile__button'
              : ' profile__button profile__button_editing'
          }
        >
          {button}
        </button>
        <button
          type="button"
          className={
            isInputDesabled
              ? 'profile__button profile__exit-button'
              : 'profile__button profile__exit-button profile__exit-button_hidden'
          }
        >
          Выйти из аккаунта
        </button>
      </form>
      <SideMenue
        onClose={props.onClose}
        isOpen={props.isOpen}
        accountActive="active"
        onLinkClick={props.onLinkClick}
      />
    </>
  )
}

Profile.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onLinkClick: PropTypes.func,
}

export default Profile

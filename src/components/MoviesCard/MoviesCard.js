import React from 'react'
import './MoviesCard.css'
import PropTypes from 'prop-types'
import image from '../../images/pic__COLOR_pic.svg'
function Card(props) {
  const [isLiked, setIsLiked] = React.useState(false)

  function handleLikeClick() {
    setIsLiked(!isLiked)
  }
  return (
    <section className={isLiked ? 'card' : `card card_${props.disabled}`}>
      <img className="card__image" alt="карточка фильма" src={image} />
      <div className="card__info">
        <h2 className="card__heading">33 слова о дизайне</h2>
        <button
          className={
            isLiked
              ? `card__like-button_${props.delete} card__like-button`
              : `card__like-button_disabled card__like-button`
          }
          type="button"
          aria-label="like button"
          onClick={handleLikeClick}
        />
      </div>
      <p className="card__film-duration">1ч42м</p>
    </section>
  )
}

Card.propTypes = {
  delete: PropTypes.string,
  disabled: PropTypes.string,
}

export default Card

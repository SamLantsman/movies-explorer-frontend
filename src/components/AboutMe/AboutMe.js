import React from 'react'
import { Link } from 'react-router-dom'
import aboutMeImage from '../../images/about-me__image.jpg'
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__column about-me__image-column">
          <img
            className="about-me__image"
            alt="фото Семёна"
            src={aboutMeImage}
          />
        </div>
        <div className="about-me__column">
          <h2 className="about-me__column-heading">Семён</h2>
          <h3 className="about-me__column-subheading">
            Фронтенд-разработчик, 29 лет
          </h3>
          <p className="about-me__column-description">
            Я родился в Москве, два года назад переехал по работе в
            Санкт-Петербург. Закончил химичекий факультет МГУ. У меня есть жена
            и пёс Кэшбэк, сокращенно &quot;Кэш&quot;. Я люблю слушать музыку, а
            ещё увлекаюсь ЗОЖ. Недавно начал кодить. С 2014 года работаю в
            научпоп-стартапах. Сейчас в компании MEL Science. Я не собираюсь
            веб-разработчиком. Эти навыки нужны мне для того чтобы лучше
            понимать, как работает e-commerce, лучше взаимодействовать с
            коллегами из IT-отдела и, если что, уметь быстро что-то
            сделать/поправить на сайте самостоятельно
          </p>
          <ul className="about-me__column-links">
            <li>
              <Link
                className="about-me__column-link"
                to={{ pathname: 'https://www.facebook.com/sam.lantsman' }}
                target="_blank"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                className="about-me__column-link"
                to={{ pathname: 'https://github.com/SamLantsman' }}
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

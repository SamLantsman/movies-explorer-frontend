import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__content">
        <li className="website">
          <Link
            className="website__link"
            to={{ pathname: 'https://samlantsman.github.io/how-to-learn/' }}
            target="_blank"
          >
            <h2 className="website__link-heading">Статичный сайт</h2>
            <p className="website__link-icon"> &#8599;</p>
          </Link>
        </li>
        <li className="website">
          <Link
            className="website__link"
            to={{ pathname: 'https://samlantsman.github.io/russian-travel' }}
            target="_blank"
          >
            <h2 className="website__link-heading">Адаптивный сайт</h2>
            <p className="website__link-icon"> &#8599;</p>
          </Link>
        </li>
        <li className="website">
          <Link
            className="website__link"
            to={{
              pathname: 'http://sams.domain.students.nomoredomains.icu/signup',
            }}
            target="_blank"
          >
            <h2 className="website__link-heading">Одностраничное приложение</h2>
            <p className="website__link-icon"> &#8599;</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__content">
        <div className="footer__column">&copy; 2020</div>
        <ul className="footer__column">
          <li className="footer__website">
            <Link
              className="footer__link"
              to={{ pathname: 'https://praktikum.yandex.ru/' }}
              target="_blank"
            >
              <h2 className="footer__link-heading">Яндекс.Практикум</h2>
            </Link>
          </li>
          <li className="footer__website">
            <Link
              className="footer__link"
              to={{ pathname: 'https://github.com/SamLantsman' }}
              target="_blank"
            >
              <h2 className="footer__link-heading">Github</h2>
            </Link>
          </li>
          <li className="footer__website">
            <Link
              className="footer__link"
              to={{ pathname: 'https://www.facebook.com/sam.lantsman' }}
              target="_blank"
            >
              <h2 className="footer__link-heading">Facebook</h2>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

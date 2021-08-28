import React from 'react'
import './Techs.css'

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__heading">Технологии</h2>
      <div className="techs__content">
        <h2 className="techs__content-heading">7 технологий</h2>
        <p className="techs__content-description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs-table">
        <li className="techs-table__cell">HTML</li>
        <li className="techs-table__cell">CSS</li>
        <li className="techs-table__cell">JS</li>
        <li className="techs-table__cell">React</li>
        <li className="techs-table__cell">Git</li>
        <li className="techs-table__cell">Express.js</li>
        <li className="techs-table__cell">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs

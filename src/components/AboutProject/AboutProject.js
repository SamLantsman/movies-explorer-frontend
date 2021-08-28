import React from 'react'
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__heading">О проекте</h2>
      <ul className="project-description">
        <li className="project-description__cell">
          <h2 className="project-description__heading">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="project-description__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project-description__cell">
          <h2 className="project-description__heading">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="project-description__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="project-details">
        <li className="project-details__short-cell">
          <p className="project-description__text project-description__text_green">
            1 неделя
          </p>
          <p className="project-description__text project-description__text-faded">
            Back-end
          </p>
        </li>
        <li className="project-details__long-cell">
          <p className="project-description__text project-description__text_gray">
            4 недели
          </p>
          <p className="project-description__text project-description__text-faded">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject

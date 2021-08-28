import React from 'react'
import './NavTab.css'
import { Link as NavLink } from 'react-scroll'
function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__content">
        <li>
          <NavLink to="project" className="nav-tab__link" smooth>
            О проекте
          </NavLink>
        </li>
        <li>
          <NavLink to="techs" className="nav-tab__link" smooth>
            Технологии
          </NavLink>
        </li>
        <li>
          <NavLink to="about-me" className="nav-tab__link" smooth>
            Студент
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab

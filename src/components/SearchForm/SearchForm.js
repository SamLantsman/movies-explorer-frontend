import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__content">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__text-input"
        />
        <button
          type="submit"
          className="search-form__search-button"
          aria-label="search button"
        />
        <label className="search-form__switch">
          <h2 className="search-form__subheading" htmlFor="filter">
            Короткоментражки
          </h2>
          <input
            type="checkbox"
            className="search-form__checkbox"
            id="filter"
          />
          <span className="search-form__slider" />
        </label>
      </form>
    </section>
  )
}

export default SearchForm

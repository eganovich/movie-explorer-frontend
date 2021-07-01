import React from 'react';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({
  place,
}) {

  return(
    <section className="search">
      <form className="search__form" noValidate>
        <div className="search__input-wrapper">
          <input
            className="search__input"
            type="text"
            value=''
            placeholder="Фильм"
            required
          />
          <button className="search__button" type="submit" />
        </div>
        <div className="search__checkbox-wrapper">
          <FilterCheckbox/>
          <p className="search__checkbox-label">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
import React from 'react';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({
  place,
  onSearch,
  setIsLoading,
}) {

  const [searchRequest, setSearchRequest] = React.useState('');
  const [shortMoviesRequest, setShortMoviesRequest] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);

  const searchErrorStyle = searchError ? 'search__error search__error_visible' : 'search__error';
  const localStorageRequestKey = (place === 'movies') ? 'request' : 'savedRequest';
  const localStorageCheckboxKey = (place === 'movies') ? 'shortMovies' : 'savedShortMovies';

  function handleRequestChange(evt) {
    const request = evt.target.value;

    setSearchError(false);
    setSearchRequest(request);
    localStorage.setItem(localStorageRequestKey, request);
  }

  function handleSearch(evt) {
    let shortFilter;

    if (evt) {
      evt.preventDefault();
      shortFilter = shortMoviesRequest;
    } else {
      shortFilter = !shortMoviesRequest;
    }

    if (!searchRequest) {
      setSearchError(true);
      return;
    }

    setIsLoading(true);

    return onSearch(searchRequest, shortFilter)
      .finally(() => setIsLoading(false));
  }

  React.useEffect(() => {
    if (localStorage[localStorageRequestKey]) {
      setSearchRequest(localStorage[localStorageRequestKey]);
    }

    if (localStorage[localStorageCheckboxKey]) {
      const shortMovies = localStorage[localStorageCheckboxKey] === 'true';

      setShortMoviesRequest(shortMovies);
    }
  }, [localStorageCheckboxKey, localStorageRequestKey]);

  return(
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSearch}>
        <span className={searchErrorStyle}>Нужно ввести ключевое слово</span>
        <div className="search__input-wrapper">
          <input
            className="search__input"
            type="text"
            value={localStorage[localStorageRequestKey] || ''}
            placeholder="Фильм"
            required
            onChange={handleRequestChange}
          />
          <button className="search__button" type="submit" />
        </div>
        <div className="search__checkbox-wrapper">
          <FilterCheckbox
          state={shortMoviesRequest}
          onCheck={setShortMoviesRequest}
          onSearch={handleSearch}
          localStorageCheckboxKey={localStorageCheckboxKey}
          />
          <p className="search__checkbox-label">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
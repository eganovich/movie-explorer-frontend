import React from 'react';

import './Movies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

import {movies} from '../../utils/constants';

function Movies({
  loggedIn,
  menuProps,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const moviesToShow = movies;

  return(
    <>
      <Header
        place="movies"
        loggedIn={loggedIn}
        {...menuProps} />
      <section className="movies">
        <SearchForm
          place="movies"
        />
        {isLoading && <Preloader />}
        {
          !isLoading &&
          <MoviesCardList
            place="movies"
            moviesToShow={moviesToShow}
            />
        }
      </section>
      <Footer />
    </>
  );
}

export default Movies;
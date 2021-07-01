import React from 'react';

import './SavedMovies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

import {savedMovies} from '../../utils/constants';

function SavedMovies({
  loggedIn,
  menuProps,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const savedMoviesToShow = savedMovies;

  return(
    <>
      <Header
        place="saved"
        loggedIn={loggedIn}
        {...menuProps}
      />
      <section className="saved-movies">
        <SearchForm
          place="saved"
        />
        {isLoading && <Preloader />}
        {
          !isLoading &&
          <MoviesCardList
            place="saved"
            moviesToShow={savedMoviesToShow}
          />
        }
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
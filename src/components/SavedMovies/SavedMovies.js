import React from 'react';

import './SavedMovies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function SavedMovies({
  loggedIn,
  menuProps,
  savedMoviesToShow,
  moviesToMap,
  moviesToAdd,
  savedMoviesNotFound,
  getSavedMovies,
  onSearchForSavedMovies,
  onGetMoreMovies,
  onDislike,
  onOpenMovieModal,
  onSetCurrentMovie,
}) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies]);

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
          onSearch={onSearchForSavedMovies}
          setIsLoading={setIsLoading}
        />
        {isLoading && <Preloader />}
        {
          !isLoading &&
          <MoviesCardList
            place="saved"
            moviesToShow={savedMoviesToShow}
            moviesToMap={moviesToMap}
            moviesToAdd={moviesToAdd}
            notFound={savedMoviesNotFound}
            onGetMoreMovies={onGetMoreMovies}
            onDislike={onDislike}
            onOpenMovieModal={onOpenMovieModal}
            onSetCurrentMovie={onSetCurrentMovie}
          />
        }
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
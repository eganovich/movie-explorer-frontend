import React from 'react';

import './Movies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';


function Movies({
  loggedIn,
  menuProps,
  moviesToShow,
  moviesToMap,
  moviesToAdd,
  moviesNotFound,
  onSearchForMovies,
  onGetMoreMovies,
  onLike,
  onDislike,
  onOpenMovieModal,
  onSetCurrentMovie,
}) {
  const [isLoading, setIsLoading] = React.useState(false);

  return(
    <>
      <Header
        place="movies"
        loggedIn={loggedIn}
        {...menuProps} />
      <section className="movies">
        <SearchForm
          place="movies"
          onSearch={onSearchForMovies}
          setIsLoading={setIsLoading}
        />
        {isLoading && <Preloader />}
        {
          !isLoading &&
          <MoviesCardList
            place="movies"
            moviesToShow={moviesToShow}
            moviesToMap={moviesToMap}
            moviesToAdd={moviesToAdd}
            notFound={moviesNotFound}
            onGetMoreMovies={onGetMoreMovies}
            onLike={onLike}
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

export default Movies;
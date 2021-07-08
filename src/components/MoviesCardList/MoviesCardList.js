import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({
  place,
  moviesToShow,
  notFound,
  moviesToMap,
  moviesToAdd,
  onGetMoreMovies,
  onLike,
  onDislike,
  onOpenMovieModal,
  onSetCurrentMovie,
}) {
  const moviesCardLikeType = place === 'saved' ? 'remove' : 'like';
  const moviesArray = [...moviesToShow];
  moviesArray.length = moviesToMap;
  let moviesGridClass = (moviesToShow.length >= 4) ? 'movies__grid' : 'movies__grid movies__grid_few-cards';

  const showMoreButton = moviesArray.length >= moviesToShow.length ? false : true;

  function getMoreMovies() {
    onGetMoreMovies(moviesToMap + moviesToAdd);
  }
  
  return(
    <>
     {!notFound && <ul className={moviesGridClass}>
        {moviesArray.map((item) => (
          <li className="movies__item" key={item.id || item._id}>
            <MoviesCard
              item={item}
              likeType={moviesCardLikeType}
              onLike={onLike}
              onDislike={onDislike}
              onOpenMovieModal={onOpenMovieModal}
              onSetCurrentMovie={onSetCurrentMovie}
            />
          </li>
         ))} 
      </ul>}
      {showMoreButton && <div className="movies__more">
        <button className="movies__more-button" onClick={getMoreMovies}>Ещё</button>
      </div>}
      {notFound && <p className="movies__not-found">Ничего не найдено</p>}
    </>
  );
}

export default MoviesCardList;
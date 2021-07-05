import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({
  place,
  moviesToShow,
  notFound
}) {
  const moviesCardLikeType = place === 'saved' ? 'remove' : 'like';
  const moviesArray = [...moviesToShow];
  let moviesGridClass = (moviesToShow.length >= 4) ? 'movies__grid' : 'movies__grid movies__grid_few-cards';
  
  return(
    <>
     <ul className={moviesGridClass}>
        {moviesArray.map((item) => (
          <li className="movies__item">
            <MoviesCard
              item={item}
              likeType={moviesCardLikeType}
            />
          </li>
         ))} 
      </ul>
      <div className="movies__more">
        <button className="movies__more-button">Ещё</button>
      </div>
      {notFound && <p className="movies__not-found">Ничего не найдено</p>}
    </>
  );
}

export default MoviesCardList;
import './MoviesCard.css';

import LikeButton from '../LikeButton/LikeButton.js';
import parseDuration from '../../utils/parseDuration.js';

function MoviesCard({
  item,
  likeType,
  onLike,
  onDislike,
  onOpenMovieModal,
  onSetCurrentMovie,
}) {
  
  const {
    director,
    year,
    description,
    nameRU,
    nameEN,
  } = item;

  const dbId = item._id;
  const movieId = item.id || item.movieId;
  const country = item.country || 'Неизвестно';
  const image = (item.image && item.image.url && `https://api.nomoreparties.co${item.image.url}`) || item.image;
  const duration = item.duration;
  const thumbnail = (item.image && item.image.formats && `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`) || item.thumbnail;
  const trailer = item.trailerLink || item.trailer;

  const movie = {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    dbId,
    movieId,
    nameRU,
    nameEN,
  };

  function handleLike() {
    return onLike(movie);
  }

  function handleDislike() {
    return onDislike(movie);
  }

  function handleMovieModal() {
    onSetCurrentMovie(movie);
    onOpenMovieModal();
    window.scrollTo(0, 0);
  }

  return(
    <article className="card">
      <button className="card__button" type="button" onClick={handleMovieModal}>
        <img className="card__picture" src={image} alt="Иллюстрация к фильму" />
      </button>
      <div className="card__label">
        <div className="card__main">
          <p className="card__title">{nameRU}</p>
          <LikeButton
            type={likeType}
            isLiked={item.isLiked}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        </div>
        <p className="card__duration">{parseDuration(duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
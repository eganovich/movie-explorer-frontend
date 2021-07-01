import './MoviesCard.css';

import LikeButton from '../LikeButton/LikeButton.js';

function MoviesCard({
  item,
  likeType,
}) {
  
  const image = item.image;
  const duration = item.duration;
  const name = item.name;


  return(
    <article className="card">
      <button className="card__button" type="button">
        <img className="card__picture" src={image} alt="Иллюстрация к фильму" />
      </button>
      <div className="card__label">
        <div className="card__main">
          <p className="card__title">{name}</p>
          <LikeButton
            type={likeType}
          />
        </div>
        <p className="card__duration">{duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
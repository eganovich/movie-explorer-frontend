import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return(
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Страница не найдена</h1>
      <Link className="not-found__link" to="/">Назад</Link>
    </section>
  );
}

export default NotFound;
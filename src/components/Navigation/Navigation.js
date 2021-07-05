import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

import Menu from '../Menu/Menu.js';

function Navigation({
  loggedIn,
  place,
  isMenuOpen,
  onMenuOpen,
  onMenuClose
  }) {
  const profileLinkClassName =
    (place === 'main') ?
    'navigation__profile-link navigation__profile-link_type_login' :
    'navigation__profile-link navigation__profile-link_type_profile';
  
  return(
    <>
      <nav className="navigation">
        {(place !== 'main' || loggedIn) && <ul className='navigation__links'>
          <li className="navigation__list-item">
            <NavLink
              className="navigation__page-link"
              activeClassName="navigation__page-link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              className="navigation__page-link"
              activeClassName="navigation__page-link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>}
        <ul className={`navigation__buttons navigation__buttons_place_${place}`}>
          {(place === 'main' && !loggedIn) && <li className="navigation__list-item navigation__list-item_type_button">
            <Link
              className="navigation__profile-link navigation__profile-link_type_register"
              to="/signup"
            >
              Регистрация
            </Link>
          </li>}
          {(place === 'main' && !loggedIn) && <li className="navigation__list-item navigation__list-item_type_button">
            <Link
              className="navigation__profile-link navigation__profile-link_type_login"
              to="/signin"
            >
              Войти
            </Link>
          </li>}
          {(place !== 'main' || loggedIn) && <li className="navigation__list-item navigation__list-item_type_button">
            <Link
              className={profileLinkClassName}
              to="/profile"
            >
              Аккаунт
              <div className="navigation__profile-icon"></div>
            </Link>
          </li>}
        </ul>
        {(place !== 'main' || loggedIn) && <button className="navigation__menu" type="button" onClick={onMenuOpen} />}
      </nav>
      <Menu isVisible={isMenuOpen} onClose={onMenuClose} />
    </>
  );
}

export default Navigation;
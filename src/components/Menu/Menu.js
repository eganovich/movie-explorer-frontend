  
import { NavLink, Link } from 'react-router-dom';

import './Menu.css';

function Menu({ isVisible, onClose }) {
  return(
    <div className={`header__menu-wrapper menu-wrapper ${isVisible ? 'menu-wrapper_visible' : '' }`}>
      <div className="menu-wrapper__fade" />
      <aside className="menu">
        <button className="menu__close" type="button" onClick={onClose} />
        <menu className="menu__list">
          <li className="menu__item">
            <NavLink
              className="menu__link"
              activeClassName="menu__link_active"
              exact to="/"
              onClick={onClose}
            >
              Главная
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__link"
              activeClassName="menu__link_active"
              to="/movies"
              onClick={onClose}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__link"
              activeClassName="menu__link_active"
              to="/saved-movies"
              onClick={onClose}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </menu>
        <Link
          className="menu__profile"
          to="/profile"
          onClick={onClose}
        >Аккаунт
        <div className="menu__profile-icon"></div></Link>
      </aside>
    </div>
  );
}

export default Menu;
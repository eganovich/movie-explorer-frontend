import { Link } from 'react-router-dom';

import './Logo.css';

import image from '../../images/logo.svg';

function Logo({ userForm }) {
  return(
    <Link to="/">
      <img className={`logo ${userForm ? 'form__logo' : ''}`} src={image} alt="Логотип" />
    </Link>
  );
}

export default Logo;
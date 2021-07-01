import { Link } from 'react-router-dom';

import './Redirect.css';

function Redirect({ place }) {
  const className = place === 'login' ? 'login__redirect redirect' : 'register__redirect redirect';
  const text = place === 'login' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?';
  const linkText = place === 'login' ? 'Регистрация' : 'Войти';
  const link = place === 'login' ? '/signup' : '/signin';

  return(
    <p className={className}>
      {`${text} `}
      <Link className="redirect__link" to={link}>{linkText}</Link>
    </p>
  );
}

export default Redirect;
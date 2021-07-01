import './Header.css';

import Logo from '../Logo/Logo.js';
import Navigation from '../Navigation/Navigation.js';

function Header({
  place,
  loggedIn,
  isMenuOpen,
  onMenuOpen,
  onMenuClose
}) {
  let headerModificator;

  switch (place) {
    case 'main': {
      headerModificator = 'header_place_main';
      break;
    }
    case 'profile': {
      headerModificator = 'header_place_profile';
      break;
    }
    default: {
      headerModificator = '';
    }
  }

  return(
    <header className={`header ${headerModificator}`}>
      <Logo />
      <Navigation
        loggedIn={loggedIn}
        place={place}
        isMenuOpen={isMenuOpen}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
    </header>
  );
}

export default Header;
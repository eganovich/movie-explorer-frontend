import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  
  function openMenu() {    
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const menuProps = {
    isMenuOpen,
    onMenuOpen: openMenu,
    onMenuClose: closeMenu,
  };
  
  return (
    <Switch>
      <Route exact path="/">
        <Main loggedIn={loggedIn} />
      </Route>
      <Route exact path="/signup">
        <Register/>
      </Route>
      <Route exact path="/signin">
        <Login/>
      </Route>  
      <Route exact path="/profile">
        <Profile
          loggedIn={loggedIn}
          menuProps={menuProps} />
      </Route>
      <Route exact path="/movies">
        <Movies
          loggedIn={loggedIn}
          menuProps={menuProps} />
      </Route>
      <Route exact path="/saved-movies">
        <SavedMovies
          loggedIn={loggedIn}
          menuProps={menuProps} />
      </Route>                
      <Route path="/">
        <NotFound />
      </Route>    
    </Switch>
  );
}

export default App;

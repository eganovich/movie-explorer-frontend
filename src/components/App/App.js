import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import MovieModal from '../MovieModal/MovieModal.js';
import InfoModal from '../InfoModal/InfoModal.js';

import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';

import useCurrentWidth from '../../utils/useCurrentWidth.js';
import getMoviesGridCounts from '../../utils/getMoviesGridCounts.js';
import getErrorMessage from '../../utils/getErrorMessage.js';
import filterMovies from '../../utils/filterMovies.js';

function App() {
  const history = useHistory();
  const windowWidth = useCurrentWidth();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(undefined);

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [savedMoviesToShow, setSavedMoviesToShow] = React.useState([]);
  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [savedMoviesNotFound, setSavedMoviesNotFound] = React.useState(false);

  const [moviesToMap, setMoviesToMap] = React.useState(0);
  const [moviesToAdd, setMoviesToAdd] = React.useState(0);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState({
    error: true,
    open: false,
    title: 'Внимание!',
    message: 'Что-то пошло не так...',
  });
  const [movieModalOpen, setMovieModalOpen] = React.useState(false);
  const [currentMovie, setCurrentMovie] = React.useState({});

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const openModal = React.useCallback((
    message,
    title = 'Внимание!',
    error = true,
  ) => {
    setModalState({
      ...modalState,
      open: true,
      message,
      title,
      error
    });
  }, [modalState]);

  function closeModal() {
    setModalState({ ...modalState, open: false });
  }

  function openMovieModal() {
    setMovieModalOpen(true);
  }

  function closeMovieModal() {
    setMovieModalOpen(false);
  }

  function clearData() {
    setLoggedIn(false);
    localStorage.clear();
  }

  function signUp({ name, email, password }) {
    return mainApi.signUp({ name, email, password })
      .then(() => signIn({ email, password }))
      .catch(err => openModal(getErrorMessage(err)));
  }

  function signIn({ email, password }) {
    return mainApi.signIn({ email, password })
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('jwt', res.token);
        history.push('/movies');
      })
      .then(() => getProfileData(localStorage.getItem("jwt")))
      .catch(err => openModal(getErrorMessage(err)));
  }

  function signOut(){
    clearData();
    history.push("/signin");
  }

  function getProfileData(token) {
    mainApi.getUserInfo(token)
      .then(res => setCurrentUser(res))
      .catch(err => openModal(getErrorMessage(err)));
  }

  function editProfile(data) {
    return mainApi.patchUserInfo(data, localStorage.getItem("jwt"))
      .then(() => openModal('Данные успешно изменены!', 'Получилось!', false))
      .then(() => getProfileData(localStorage.getItem("jwt")))
      .catch(err => openModal(getErrorMessage(err)));
  }

  function getMovies() {
    return Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies(localStorage.getItem("jwt"))])
      .then(([movies, savedMovies]) => {
        setSavedMovies(savedMovies);

        const result = movies.map(movie => {
          if (savedMovies.find(savedMovie => savedMovie.movieId === movie.id)) {
            movie.isLiked = true;
          } else {
            movie.isLiked = false;
          }
          return movie;
        });

        return result;
      })
      .catch(err => openModal(getErrorMessage(err)));
  }

  const getSavedMovies = React.useCallback(() => {
    return mainApi.getSavedMovies(localStorage.getItem("jwt"))
      .then(res => {
        setSavedMovies(res);
        console.log(savedMovies);
        return res;
      })
      .catch(err => openModal(getErrorMessage(err)));
  }, [openModal]);

  function searchForMovies(request, shortFilter) {
    return getMovies()
      .then(movies => filterMovies(movies, request, shortFilter))
      .then(movies => {
        setMoviesNotFound(!movies[0]);
        setMoviesToShow(movies);
        localStorage.setItem('searchMoviesResult', JSON.stringify(movies));
      })
      .catch(err => openModal(getErrorMessage(err)));
  }

  async function searchForSavedMovies(
    request,
    shortFilter,
    shouldGetSavedMovies = false,
  ) {
    let newSavedMovies = [...savedMovies];

    if (shouldGetSavedMovies) {
      newSavedMovies = await getSavedMovies();
    }

    const filteredSavedMovies = filterMovies(newSavedMovies, request, shortFilter);

    setSavedMoviesNotFound(!filteredSavedMovies[0]);
    setSavedMoviesToShow(filteredSavedMovies);
    localStorage.setItem('searchSavedMoviesResult', JSON.stringify(filteredSavedMovies));
  }

  function saveMovie(data) {
    return mainApi.addMovie(data, localStorage.getItem("jwt"))
      .then(res => {
        return getSavedMovies()
          .then(() => {
            if (localStorage.savedRequest) {
              const savedShortMoviesFilter = localStorage.savedShortMovies === 'true' ? true : false;
    
              searchForSavedMovies(localStorage.savedRequest, savedShortMoviesFilter, true);
            }
          })
          .then(() => {
            const movieIndex = moviesToShow.findIndex(item => item.id === res.movieId);

            const newMoviesToShow = [...moviesToShow];

            newMoviesToShow[movieIndex].isLiked = true;

            setMoviesToShow(newMoviesToShow);
            localStorage.setItem('searchMoviesResult', JSON.stringify(newMoviesToShow));
          })
          .catch(err => openModal(getErrorMessage(err)));
      })
      .catch(err => openModal(getErrorMessage(err)));
  }

  function deleteSavedMovie(movie) {
    let dbId;
    let movieId;

    if (movie.dbId) {
      dbId = movie.dbId;
      movieId = movie.movieId;
      console.log(dbId, movieId);
    } else {
      const movieToDelete = savedMovies.find(item => item.movieId === movie.movieId);

      if (movieToDelete) {
        dbId = movieToDelete._id;
        movieId = movieToDelete.movieId;
      }
    }

    return mainApi.deleteSavedMovie(dbId, localStorage.getItem("jwt"))
      .then(res => {
        getSavedMovies();

        if (localStorage.savedRequest) {
          const savedShortMoviesFilter = localStorage.savedShortMovies === 'true' ? true : false;

          searchForSavedMovies(localStorage.savedRequest, savedShortMoviesFilter, true);
        }

        const movieIndex = moviesToShow.findIndex(item => item.id === movieId);

        const newMoviesToShow = [...moviesToShow];

        newMoviesToShow[movieIndex].isLiked = false;

        setMoviesToShow(newMoviesToShow);
        localStorage.setItem('searchMoviesResult', JSON.stringify(newMoviesToShow));

        return res;
      })
      .catch(err => openModal(getErrorMessage(err)));
  }

  React.useEffect(() => {
    if (localStorage.loggedIn === 'true') {
      mainApi.getUserInfo(localStorage.getItem("jwt"))
        .then(res => {
          setCurrentUser(res);
          setLoggedIn(true);
          localStorage.setItem('loggedIn', 'true');
        })
        .catch(() => clearData());
    } else {
      clearData();
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.searchMoviesResult) {
      setMoviesToShow(JSON.parse(localStorage.searchMoviesResult));
    }

    if (localStorage.searchSavedMoviesResult) {
      setSavedMoviesToShow(JSON.parse(localStorage.searchSavedMoviesResult));
    }
  }, []);

  React.useEffect(() => {
    const { newMoviesCount, newAddCount } = getMoviesGridCounts(windowWidth);

    setMoviesToMap(newMoviesCount);
    setMoviesToAdd(newAddCount);
  }, [windowWidth]);

  const menuProps = {
    isMenuOpen,
    onMenuOpen: openMenu,
    onMenuClose: closeMenu,
  };

  const moviesProps = {
    moviesToShow,
    moviesToMap,
    moviesToAdd,
    moviesNotFound,
    onSearchForMovies: searchForMovies,
    onGetMoreMovies: setMoviesToMap,
    onLike: saveMovie,
    onDislike: deleteSavedMovie,
    onOpenMovieModal: openMovieModal,
    onSetCurrentMovie: setCurrentMovie,
  };

  const savedMoviesProps = {
    savedMoviesToShow,
    moviesToMap,
    moviesToAdd,
    savedMoviesNotFound,
    getSavedMovies,
    onSearchForSavedMovies: searchForSavedMovies,
    onGetMoreMovies: setMoviesToMap,
    onDislike: deleteSavedMovie,
    onOpenMovieModal: openMovieModal,
    onSetCurrentMovie: setCurrentMovie,
  };
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route exact path="/signup">
          <Register onSignUp={signUp} />
        </Route>
        <Route exact path="/signin">
          <Login onSignIn={signIn} />
        </Route>
        <ProtectedRoute
          exact path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          menuProps={menuProps}
          onEditProfile={editProfile}
          onSignOut={signOut}
        />
        <ProtectedRoute
          exact path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          menuProps={menuProps}
          {...moviesProps}
        />
        <ProtectedRoute
          exact path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          menuProps={menuProps}
          {...savedMoviesProps}
        />
        <ProtectedRoute path="/" 
        component={NotFound}
        loggedIn={loggedIn}
        />
      </Switch>
      <InfoModal state={modalState} onClose={closeModal} />
      <MovieModal
        state={movieModalOpen}
        movie={currentMovie}
        onClose={closeMovieModal}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Preloader from '../Preloader/Preloader.jsx';

function ProtectedRoute({ component: Component, ...props }) {
  return(
    <Route>
      {props.loggedIn === undefined && (<Preloader />)}
      {props.loggedIn === false && (<Redirect to="/signin" />)}
      {props.loggedIn && (<Component {...props} />)}
    </Route>
  );
}

export default ProtectedRoute;
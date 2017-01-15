// FRONT-END: React Router
// Rendering our Router Component with {routes} component; Passing down {browser history}

// DEPENDENCIES================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// Importing all of the routes contained in the {routes} component
import routes from 'routes';

// ENTRY POINT (to application)==================================================
// Rendering application and mounting to DOM
ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

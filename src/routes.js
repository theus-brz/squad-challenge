import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyTeams from './pages/MyTeams/MyTeams';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MyTeams} />
      </Switch>
    </BrowserRouter>
  );
}

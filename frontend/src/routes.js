import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from './constants/ROUTES';
import ManageTeam from './pages/ManageTeam/ManageTeam';
import MyTeams from './pages/MyTeams/MyTeams';

const { MY_TEAMS, EDIT_TEAM, CREATE_TEAM } = ROUTES;

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={MY_TEAMS} component={MyTeams} />
        <Route path={EDIT_TEAM} component={ManageTeam} />
        <Route path={CREATE_TEAM} component={ManageTeam} />
      </Switch>
    </BrowserRouter>
  );
}

import { all, takeLatest, call, put } from 'redux-saga/effects';

import teamsDataEndpoint from '../../../services/endpoints/teamsDataEndpoint';
import { teamsDataSuccess, teamsDataFailure } from './actions';

function playersAvgAge(team) {
  const { players } = team;
  let totalAge = 0;
  for (let aux = 0; aux < players.length; aux += 1) {
    totalAge += players[aux].age;
  }
  team.avgAge = totalAge / players.length;
}

function setTeamPlayersAvgAge(teams) {
  teams.map((team) => playersAvgAge(team));
}

export function* getTeamsData() {
  try {
    const response = yield call(teamsDataEndpoint);
    yield setTeamPlayersAvgAge(response);
    yield put(teamsDataSuccess(response));
  } catch (err) {
    yield put(teamsDataFailure());
  }
}

export default all([takeLatest('@teams/DATA_REQUEST', getTeamsData)]);

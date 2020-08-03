export function setTeams(teams) {
  return {
    type: '@teams/SET_MY_TEAMS',
    payload: { teams },
  };
}

export function setSelectedTeam(team) {
  return {
    type: '@teams/SET_SELECTED_TEAM',
    payload: { team },
  };
}

export function teamsDataRequest() {
  return {
    type: '@teams/DATA_REQUEST',
  };
}

export function teamsDataSuccess(teamsData) {
  return {
    type: '@teams/DATA_SUCCESS',
    payload: { teamsData },
  };
}

export function teamsDataFailure() {
  return {
    type: '@teams/DATA_FAILURE',
  };
}

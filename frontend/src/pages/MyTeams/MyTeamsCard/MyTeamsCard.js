import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';

import Card from '../../../components/Card/Card';
import RESOURCES from '../../../constants/RESOURCES';
import ROUTES from '../../../constants/ROUTES';
import {
  setTeams,
  setSelectedTeam,
} from '../../../store/modules/teams/actions';
import compareValuesToSort from '../../../utils/compareValuesToSort';
import MyTeamsTable from './MyTeamsTable/MyTeamsTable';

function MyTeamsCard() {
  const {
    PAGES: {
      MY_TEAMS: {
        MY_TEAMS_CARD: { MY_TEAMS_CARD_TITLE },
      },
    },
  } = RESOURCES;
  const { CREATE_TEAM, EDIT_TEAM } = ROUTES;
  const [sortOrder, setSortOrder] = useState('asc');
  const { myTeams } = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleNavigation(path) {
    history.push(path);
  }

  function createTeam() {
    handleNavigation(CREATE_TEAM);
  }

  function editTeam(item) {
    dispatch(setSelectedTeam(item));
    handleNavigation(EDIT_TEAM);
  }

  function removeTeam(item) {
    const teamsAfterRemoveItem = myTeams
      .slice()
      .filter((team) => team.id !== item.id);
    dispatch(setTeams(teamsAfterRemoveItem));
  }

  function handleSort(key) {
    const sortedTeams = myTeams
      .slice()
      .sort(compareValuesToSort(key, sortOrder));
    dispatch(setTeams(sortedTeams));
    if (sortOrder === 'desc') setSortOrder('asc');
    if (sortOrder === 'asc') setSortOrder('desc');
  }

  return (
    <Card
      title={MY_TEAMS_CARD_TITLE}
      buttonTitle={<AddIcon />}
      buttonClick={createTeam}
    >
      <MyTeamsTable
        teamsToDisplay={myTeams}
        nameSortAction={() => handleSort('name')}
        descriptionSortAction={() => handleSort('description')}
        editAction={(e) => editTeam(e)}
        removeAction={(e) => removeTeam(e)}
      />
    </Card>
  );
}

export default MyTeamsCard;

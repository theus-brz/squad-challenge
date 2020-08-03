import React from 'react';

import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';

import SortIcon from '../../../../assets/sort-icon.png';
import RESOURCES from '../../../../constants/RESOURCES';
import {
  MyTeamsTableContainer,
  MyTeamsTableRow,
  MyTeamsTableHeader,
  MyTeamsTableData,
  MyTeamsTableDataIcon,
  MyTeamsTableDataContent,
} from './MyTeamsTableStyles';

function MyTeamsTable({
  teamsToDisplay,
  nameSortAction,
  descriptionSortAction,
  editAction,
  removeAction,
}) {
  const {
    PAGES: {
      MY_TEAMS: {
        MY_TEAMS_CARD: {
          MY_TEAMS_CARD_TABLE: { HEADER_1, HEADER_2 },
        },
      },
    },
  } = RESOURCES;

  return (
    <MyTeamsTableContainer>
      <thead>
        <MyTeamsTableRow>
          <MyTeamsTableHeader>
            <button type="button" onClick={() => nameSortAction()}>
              {HEADER_1}
              <img alt="Sort Icon" src={SortIcon} />
            </button>
          </MyTeamsTableHeader>

          <MyTeamsTableHeader>
            <button type="button" onClick={() => descriptionSortAction()}>
              {HEADER_2}
              <img alt="Sort Icon" src={SortIcon} />
            </button>
          </MyTeamsTableHeader>
        </MyTeamsTableRow>
      </thead>

      <tbody>
        {teamsToDisplay.length > 0 &&
          teamsToDisplay.map((team) => (
            <MyTeamsTableRow key={team.id}>
              <MyTeamsTableData id="table-data-name">
                <MyTeamsTableDataContent>
                  <p>{team.name}</p>
                </MyTeamsTableDataContent>
              </MyTeamsTableData>

              <MyTeamsTableData id="table-data-description">
                <MyTeamsTableDataContent>
                  <p>{team.description}</p>
                  <div>
                    <MyTeamsTableDataIcon onClick={() => removeAction(team)}>
                      <DeleteIcon />
                    </MyTeamsTableDataIcon>
                    <MyTeamsTableDataIcon onClick={() => {}}>
                      <ShareIcon />
                    </MyTeamsTableDataIcon>
                    <MyTeamsTableDataIcon onClick={() => editAction(team)}>
                      <EditIcon />
                    </MyTeamsTableDataIcon>
                  </div>
                </MyTeamsTableDataContent>
              </MyTeamsTableData>
            </MyTeamsTableRow>
          ))}
      </tbody>
    </MyTeamsTableContainer>
  );
}

MyTeamsTable.propTypes = {
  teamsToDisplay: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  nameSortAction: PropTypes.func.isRequired,
  descriptionSortAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired,
};

export default MyTeamsTable;

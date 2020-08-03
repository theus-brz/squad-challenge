import React from 'react';

import PropTypes from 'prop-types';

import compareValuesToSort from '../../../../utils/compareValuesToSort';
import {
  Top5CardTableContainer,
  Top5CardTableTitle,
  Top5CardTableContent,
  Top5CardTableRow,
} from './Top5CardTableStyles';

function Top5CardTable({
  tableTitle,
  teamsToDisplay,
  keyToSort,
  displayOrder,
}) {
  return (
    <Top5CardTableContainer>
      <Top5CardTableTitle>{tableTitle}</Top5CardTableTitle>

      <Top5CardTableContent>
        {teamsToDisplay
          .slice()
          .sort(compareValuesToSort(keyToSort, displayOrder))
          .slice(0, 5)
          .map((team) => (
            <Top5CardTableRow key={team.id}>
              <p>{team.name}</p> <p>{team.avgAge}</p>
            </Top5CardTableRow>
          ))}
      </Top5CardTableContent>
    </Top5CardTableContainer>
  );
}
Top5CardTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  teamsToDisplay: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avgAge: PropTypes.number,
    })
  ).isRequired,
  keyToSort: PropTypes.string.isRequired,
  displayOrder: PropTypes.string.isRequired,
};
export default Top5CardTable;

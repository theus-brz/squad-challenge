import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../components/Card/Card';
import RESOURCES from '../../../constants/RESOURCES';
import { Top5CardContainer } from './Top5CardStyles';
import Top5CardTable from './Top5CardTable/Top5CardTable';

function Top5Card() {
  const {
    PAGES: {
      MY_TEAMS: {
        TOP_5_CARD: {
          TOP_5_CARD_TITLE,
          TOP_5_CARD_TABLE_1,
          TOP_5_CARD_TABLE_2,
        },
      },
    },
  } = RESOURCES;
  const { teams } = useSelector((state) => state.teams);

  return (
    <Card title={TOP_5_CARD_TITLE}>
      <Top5CardContainer>
        <Top5CardTable
          tableTitle={TOP_5_CARD_TABLE_1.HEADER}
          teamsToDisplay={teams}
          keyToSort="avgAge"
          displayOrder="desc"
        />

        <Top5CardTable
          tableTitle={TOP_5_CARD_TABLE_2.HEADER}
          teamsToDisplay={teams}
          keyToSort="avgAge"
          displayOrder="asc"
        />
      </Top5CardContainer>
    </Card>
  );
}

export default Top5Card;

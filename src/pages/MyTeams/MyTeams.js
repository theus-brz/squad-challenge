import React from 'react';

import Card from '../../components/Card/Card';
import { MyTeamsContainer } from './MyTeamsStyles';

function MyTeams() {
  return (
    <MyTeamsContainer>
      <Card title="My teams">
        <h1 id="my-teams-title-1">Hello World !</h1>
      </Card>
      <Card title="Top 5">
        <h1 id="my-teams-title-1">Hello World !</h1>
      </Card>
    </MyTeamsContainer>
  );
}

export default MyTeams;

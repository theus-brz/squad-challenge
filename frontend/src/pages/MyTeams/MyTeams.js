import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../../components/Card/Card';
import { teamsDataRequest } from '../../store/modules/teams/actions';
import MyTeamsCard from './MyTeamsCard/MyTeamsCard';
import { MyTeamsContainer } from './MyTeamsStyles';
import Top5Card from './Top5Card/Top5Card';

function MyTeams() {
  const { dataDownloaded } = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataDownloaded) dispatch(teamsDataRequest());
  }, [dispatch, dataDownloaded]);

  return (
    <MyTeamsContainer>
      <MyTeamsCard />
      <div className="right-side">
        <Top5Card />
        <Card primary={false}>
          <div style={{ height: '200px' }} />
        </Card>
      </div>
    </MyTeamsContainer>
  );
}

export default MyTeams;

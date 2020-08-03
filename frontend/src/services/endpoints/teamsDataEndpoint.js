import api from '../../config/api';
import ENDPOINTS from '../../constants/ENDPOINTS';

const { TEAMS_DATA } = ENDPOINTS;

export default function* teamsDataEndpoint() {
  const response = yield api.get(TEAMS_DATA);

  return response.data;
}

import produce from 'immer';

const INITIAL_STATE = {
  loading: true,
  error: false,
  dataDownloaded: false,
  selectedTeam: {
    id: null,
    name: '',
    description: '',
    website: '',
    type: '',
    tags: [],
    players: [],
  },
  myTeams: [
    {
      id: 1,
      name: 'Minecraft Sports',
      description: 'A Minecraft Club',
      website: 'https://www.minecraft.net/',
      type: 'Fantasy',
      tags: ['Blocks', 'Mojang'],
      players: [],
    },
    {
      id: 2,
      name: 'Legends of Soccer',
      description: 'Riot Games Club',
      website: 'https://na.leagueoflegends.com/en-us/',
      type: 'Fantasy',
      tags: ['LOL', 'Valorant', 'Runeterra'],
      players: [],
    },
    {
      id: 3,
      name: 'Valve Club',
      description: 'Valve Sports Club',
      website: 'https://www.valvesoftware.com/',
      type: 'Fantasy',
      tags: ['Portal', 'Half-Life'],
      players: [],
    },
  ],
  teams: [],
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@teams/SET_MY_TEAMS': {
        draft.myTeams = action.payload.teams;
        break;
      }

      case '@teams/SET_SELECTED_TEAM': {
        draft.selectedTeam = action.payload.team;
        break;
      }

      case '@teams/DATA_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@teams/DATA_SUCCESS': {
        draft.teams = action.payload.teamsData;
        draft.dataDownloaded = true;
        draft.loading = false;
        break;
      }

      case '@teams/DATA_FAILURE': {
        draft.error = true;
        break;
      }

      default:
    }
  });
}

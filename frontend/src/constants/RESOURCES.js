export default {
  WEB_HEADER: { HEADER_TITLE: 'Squad Management Tool' },
  PAGES: {
    MY_TEAMS: {
      MY_TEAMS_CARD: {
        MY_TEAMS_CARD_TITLE: 'My teams',
        MY_TEAMS_CARD_TABLE: {
          HEADER_1: 'Name',
          HEADER_2: 'Description',
        },
      },
      TOP_5_CARD: {
        TOP_5_CARD_TITLE: 'Top 5',
        TOP_5_CARD_TABLE_1: {
          HEADER: 'Highest avg age',
        },
        TOP_5_CARD_TABLE_2: {
          HEADER: 'Lowest avg age',
        },
      },
    },
    MANAGE_TEAM: {
      CREATE_YOUR_TEAM_CARD: {
        TEAM_INFORMATION_SECTION: {
          TEAM_INFORMATION_SECTION_TITLE: 'TEAM INFORMATION',
          NAME_INPUT: {
            NAME_INPUT_TITLE: 'Team name',
            NAME_INPUT_PLACEHOLDER: 'Insert team name',
            NAME_INPUT_NAME: 'name',
          },
          DESCRIPTION_INPUT: {
            DESCRIPTION_INPUT_TITLE: 'Description',
            DESCRIPTION_INPUT_PLACEHOLDER: '',
            DESCRIPTION_INPUT_NAME: 'description',
          },
          WEBSITE_INPUT: {
            WEBSITE_INPUT_TITLE: 'Team website',
            WEBSITE_INPUT_PLACEHOLDER: 'http://myteam.com',
            WEBSITE_INPUT_NAME: 'website',
          },
          TYPE_INPUT: {
            TYPE_INPUT_TITLE: 'Team type',
            TYPE_INPUT_NAME: 'type',
            TYPE_INPUTS: [
              {
                value: 'Real',
                htmlFor: 'real',
              },
              {
                value: 'Fantasy',
                htmlFor: 'fantasy',
              },
            ],
          },
          TAGS_INPUT: {
            TAGS_INPUT_TITLE: 'Tags',
            TAGS_INPUT_PLACEHOLDER: '',
            TAGS_INPUT_NAME: 'tags',
          },
        },
        CONFIGURE_SQUAD_SECTION: {
          CONFIGURE_SQUAD_SECTION_TITLE: 'CONFIGURE SQUAD',
          SEARCH_INPUT: {
            SEARCH_INPUT_TITLE: 'Search Players',
            SEARCH_INPUT_PLACEHOLDER: '',
            SEARCH_INPUT_NAME: 'search',
          },
        },
        SUBMIT_BUTTON_TITLE: 'Save',
      },
    },
  },
  PAGE_FOOTER: { COPYRIGHT_TEXT: '2020 - All rights reserved' },
};

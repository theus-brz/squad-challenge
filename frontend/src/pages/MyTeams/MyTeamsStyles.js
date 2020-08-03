import styled from 'styled-components';

import { CardContainer } from '../../components/Card/CardStyles';

export const MyTeamsContainer = styled.main`
  padding: 35px;
  display: flex;
  justify-content: space-evenly;
  flex: 1;

  .right-side {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 25px;
  }

  ${CardContainer} + ${CardContainer} {
    margin-top: 25px;
  }

  @media(max-width: 800px) {
    flex-direction: column;

    .right-side {
      margin-left: 0px;
      margin-top: 25px;
    }
  }

  @media(max-width: 375px) {
    padding: 20px;
  }

  @media(max-width: 320px) {
    padding: 10px;
  }
`;

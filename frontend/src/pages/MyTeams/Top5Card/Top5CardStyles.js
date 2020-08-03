import styled from 'styled-components';

import { Top5CardTableContainer } from './Top5CardTable/Top5CardTableStyles';

export const Top5CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${Top5CardTableContainer} + ${Top5CardTableContainer} {
    margin-left: 15px;
  }
`;

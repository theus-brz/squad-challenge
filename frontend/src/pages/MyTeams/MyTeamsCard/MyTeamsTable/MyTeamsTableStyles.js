import styled from 'styled-components';

export const MyTeamsTableDataIcon = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  padding: 0px 5px;
  color: transparent;

  .MuiSvgIcon-root {
    height: 15px;
    width: 15px;
  }

  @media (max-width: 800px) {
    padding: 0px 2px;

    .MuiSvgIcon-root {
      height: 12px;
      width: 12px;
    }
  }

  @media (max-width: 320px) {
    .MuiSvgIcon-root {
      height: 10px;
      width: 10px;
    }
  }
`;

export const MyTeamsTableRow = styled.tr`
  color: ${(props) => props.theme.black};
`;

export const MyTeamsTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    ${MyTeamsTableRow}:hover {
      background-color: ${(props) => props.theme.myTeamsHoverBackground};
      color: ${(props) => props.theme.myTeamsHoverColor};

      ${MyTeamsTableDataIcon} {
        color: ${(props) => props.theme.myTeamsHoverColor};
      }
    }
  }
`;

export const MyTeamsTableHeader = styled.th`
  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.black};
    font-family: 'Roboto', sans-serif;

    font-size: 14px;

    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img {
      height: 15px;
    }

    @media (max-width: 800px) {
      font-size: 12px;
    }

    @media (max-width: 320px) {
      font-size: 10px;
    }
  }

  & + & {
    border-left: 1px solid ${(props) => props.theme.gray};
  }
`;

export const MyTeamsTableData = styled.td`
  font-size: 14px;
  padding: 10px 15px;
  white-space: nowrap;
  vertical-align: baseline;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const MyTeamsTableDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;

  @media (max-width: 800px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

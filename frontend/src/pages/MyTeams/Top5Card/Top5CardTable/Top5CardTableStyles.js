import styled from 'styled-components';

export const Top5CardTableContainer = styled.div`
  flex: 1;
`;

export const Top5CardTableTitle = styled.h3`
  font-size: 14px;
  color: ${(props) => props.theme.dark};
`;

export const Top5CardTableRow = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  color: ${(props) => props.theme.dark};
  font-weight: 200;

  p {
    font-size: 14px;
  }
`;

export const Top5CardTableContent = styled.div`
  margin-top: 10px;
  background-color: ${(props) => props.theme.gray};
  padding: 5px;
  border-radius: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${Top5CardTableRow} + ${Top5CardTableRow} {
    margin-top: 5px;
  }
`;

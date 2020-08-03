import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 10px 0 ${(props) => props.theme.cardShadow};
  flex: 1;

  background: ${(props) =>
    props.primary ? props.theme.white : props.theme.cardSecondaryBackground};
`;

export const CardTitleArea = styled.div`
  padding: 20px;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  color: ${(props) => props.theme.cardTitle};
  font-size: 24px;
`;

export const CardContentArea = styled.div`
  padding: 15px;

  @media (max-width: 800px) {
    padding: 5px;
  }
`;

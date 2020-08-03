import styled from 'styled-components';

export const ActionButtonContainer = styled.button`
  padding: 8px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px 0 ${(props) => props.theme.actionButtonShadow};
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.actionButtonBackground};
`;

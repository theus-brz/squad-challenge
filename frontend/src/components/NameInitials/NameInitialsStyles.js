import styled from 'styled-components';

export const NameInitialsContainer = styled.p`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  font-size: 14px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.black};
`;

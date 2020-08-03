import styled from 'styled-components';

export const InputTextTitle = styled.p`
  color: ${(props) => (props.hasError ? props.theme.error : props.theme.black)};
  font-weight: bold;
  font-size: 14px;
`;

export const InputTextContainer = styled.div``;

export const InputTextInput = styled.input`
  margin-top: 10px;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.error : props.theme.gray)};
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`;

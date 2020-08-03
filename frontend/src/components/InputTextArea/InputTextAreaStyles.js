import styled from 'styled-components';

export const InputTextAreaTitle = styled.p`
  color: ${(props) => (props.hasError ? props.theme.error : props.theme.black)};
  font-weight: bold;
  font-size: 14px;
`;

export const InputTextAreaContainer = styled.div``;

export const InputTextAreaInput = styled.textarea`
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  height: 150px;
`;

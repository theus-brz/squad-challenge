import styled from 'styled-components';

export const InputRadioTitle = styled.p`
  color: ${(props) => (props.hasError ? props.theme.error : props.theme.black)};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const InputRadioLabel = styled.label`
  color: ${(props) =>
    props.checked ? props.theme.radioCheckedColor : props.theme.gray};
  font-weight: 200;
  font-size: 12px;

  &:checked:before {
    color: red;
  }
`;

export const InputRadioInput = styled.input.attrs({
  type: 'radio',
})`
  margin-top: 5px;
  margin-right: 15px;

  &:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: ${(props) => props.theme.white};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid ${(props) => props.theme.gray};
  }

  &:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background: ${(props) => props.theme.primary};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid ${(props) => props.theme.gray};
  }
`;

export const InputRadioContainer = styled.div`
  ${InputRadioLabel} + ${InputRadioLabel} {
    margin-left: 35px;
  }
`;

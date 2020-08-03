import React from 'react';

import PropTypes from 'prop-types';

import {
  InputTextAreaTitle,
  InputTextAreaContainer,
  InputTextAreaInput,
} from './InputTextAreaStyles';

function InputTextArea({
  inputTitle,
  inputType,
  inputName,
  inputPlaceholder,
  inputOnChange,
  inputOnBlur,
  inputValue,
  inputOnKeyDown,
  inputError,
}) {
  return (
    <InputTextAreaContainer>
      <InputTextAreaTitle hasError={inputError}>
        {inputTitle}
      </InputTextAreaTitle>
      <InputTextAreaInput
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        value={inputValue}
        onKeyDown={inputOnKeyDown}
        hasError={inputError}
      />
    </InputTextAreaContainer>
  );
}

InputTextArea.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputOnChange: PropTypes.func.isRequired,
  inputOnBlur: PropTypes.func,
  inputValue: PropTypes.string.isRequired,
  inputOnKeyDown: PropTypes.func,
  inputError: PropTypes.bool,
};

InputTextArea.defaultProps = {
  inputPlaceholder: '',
  inputType: 'text',
  inputOnBlur: () => {},
  inputOnKeyDown: () => {},
  inputError: false,
};

export default InputTextArea;

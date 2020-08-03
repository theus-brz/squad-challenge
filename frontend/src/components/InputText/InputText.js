import React from 'react';

import PropTypes from 'prop-types';

import {
  InputTextTitle,
  InputTextContainer,
  InputTextInput,
} from './InputTextStyles';

function InputText({
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
    <InputTextContainer>
      <InputTextTitle hasError={inputError}>{inputTitle}</InputTextTitle>
      <InputTextInput
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        value={inputValue}
        onKeyDown={inputOnKeyDown}
        hasError={inputError}
      />
    </InputTextContainer>
  );
}

InputText.propTypes = {
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

InputText.defaultProps = {
  inputPlaceholder: '',
  inputType: 'text',
  inputOnBlur: () => {},
  inputOnKeyDown: () => {},
  inputError: false,
};

export default InputText;

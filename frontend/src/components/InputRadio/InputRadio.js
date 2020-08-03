import React from 'react';

import PropTypes from 'prop-types';

import {
  InputRadioContainer,
  InputRadioTitle,
  InputRadioLabel,
  InputRadioInput,
} from './InputRadioStyles';

function InputRadio({
  inputTitle,
  inputRadios,
  inputName,
  currentValueSelected,
  onChange,
}) {
  if (inputRadios.length > 0)
    return (
      <InputRadioContainer>
        <InputRadioTitle>{inputTitle}</InputRadioTitle>
        {inputRadios.map((inputRadio) => (
          <InputRadioLabel
            htmlFor={inputRadio.htmlFor}
            key={inputRadio.value}
            checked={inputRadio.value === currentValueSelected}
          >
            <InputRadioInput
              name={inputName}
              value={inputRadio.value}
              checked={inputRadio.value === currentValueSelected}
              onChange={onChange}
            />
            {inputRadio.value}
          </InputRadioLabel>
        ))}
      </InputRadioContainer>
    );
  return <div style={{ display: 'none' }} />;
}

InputRadio.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputRadios: PropTypes.arrayOf(
    PropTypes.shape({
      htmlFor: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  inputName: PropTypes.string.isRequired,
  currentValueSelected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRadio;

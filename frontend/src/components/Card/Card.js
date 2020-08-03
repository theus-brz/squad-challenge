import React from 'react';

import PropTypes from 'prop-types';

import ActionButton from '../ActionButton/ActionButton';
import {
  CardContainer,
  CardTitleArea,
  CardTitle,
  CardContentArea,
} from './CardStyles';

export default function Card({
  title,
  buttonTitle,
  buttonClick,
  children,
  primary,
}) {
  return (
    <CardContainer primary={primary}>
      {(title || buttonTitle) && (
        <CardTitleArea>
          {title && <CardTitle id="card-title">{title}</CardTitle>}

          {buttonTitle && (
            <ActionButton
              id="card-button"
              onClick={buttonClick}
              title={buttonTitle}
            />
          )}
        </CardTitleArea>
      )}
      <CardContentArea>{children}</CardContentArea>
    </CardContainer>
  );
}

Card.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
  buttonTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  buttonClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Card.defaultProps = {
  primary: true,
  title: '',
  buttonTitle: '',
  buttonClick: () => {},
};

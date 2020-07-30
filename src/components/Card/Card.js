import React from 'react';

import PropTypes from 'prop-types';

import {
  CardContainer,
  CardTitleArea,
  CardTitle,
  CardContentArea,
} from './CardStyles';

export default function Card({ title, children }) {
  return (
    <CardContainer>
      <CardTitleArea>
        <CardTitle>{title}</CardTitle>
      </CardTitleArea>
      <CardContentArea>{children}</CardContentArea>
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

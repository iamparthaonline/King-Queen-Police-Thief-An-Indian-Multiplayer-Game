import React from 'react';
import PropTypes from 'prop-types';
import style from './gameStatusMessage.scss';

const gameStatusMessage = ({ message, type }) => (
  <div className={style['status-message']}>
    <span className={`${style[`${type}`]}`}>🎮</span>
    {message}
  </div>
);

gameStatusMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

export default gameStatusMessage;

import React from 'react';
import PropTypes from 'prop-types';
import style from './gameAnnouncements.scss';

const GameAnnouncements = ({ message, theme, mode }) => (
  <div
    className={`${style['game-announcements-container']} ${style[`${theme}`]} ${
      style[`${mode}`]
    } `}
  >
    {message}
  </div>
);

GameAnnouncements.propTypes = {
  message: PropTypes.string,
  message: PropTypes.string,
  mode: PropTypes.string,
};

export default GameAnnouncements;

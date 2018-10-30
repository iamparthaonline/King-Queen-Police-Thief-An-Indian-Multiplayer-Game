import React from 'react';
import PropTypes from 'prop-types';
import style from './gameHeader.scss';
import GameScore from '../gameScore';
import GameStatusMessage from '../gameStatusMessage';

const gameHeader = ({ message, type }) => (
  <div className={style['game-header']}>
    <GameScore scoreLabel="score" totalScore={2100} />
    <GameStatusMessage message={message} type={type} />
  </div>
);

gameHeader.PropTypes = {
  title: PropTypes.string,
};

export default gameHeader;

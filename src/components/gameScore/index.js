import React from 'react';
import PropTypes from 'prop-types';
import style from './gameScore.scss';

const gameScore = ({ scoreLabel, totalScore }) => (
  <div className={style.score}>
    <span className={style.text}>{scoreLabel}</span>
    <span className={style.total}>{totalScore}</span>
  </div>
);

gameScore.propTypes = {
  scoreLabel: PropTypes.string,
  totalScore: PropTypes.number,
};

export default gameScore;

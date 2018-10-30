import React from 'react';
import PropTypes from 'prop-types';
import style from './avatar.scss';

const Avatar = ({
  playerAvatar,
  playerName,
  playerStatus,
  playerScoreStatus,
  playerScore,
  isChoosAble,
}) => (
  <div
    className={`${style['option-container']} ${
      isChoosAble ? `${style.move}` : ''
    }`}
  >
    <div className={`${style.avatar} `}>{playerAvatar}</div>
    <div className={`${style.name} ${style[`${playerStatus}`]}`}>
      {playerName}
    </div>
    <div
      className={` ${style['player-score-container']} ${
        style[`${playerScoreStatus}`]
      }`}
    >
      <span className={style['player-score']}>{playerScore}</span>
    </div>
  </div>
);

Avatar.propTypes = {
  playerName: PropTypes.string,
  playerStatus: PropTypes.string,
  playerScoreStatus: PropTypes.string,
  playerScore: PropTypes.number,
  isChoosAble: PropTypes.bool,
};

export default Avatar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './avatar.scss';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChoosAble: false,
    };
    this.userProfile = {};
  }

  componentWillReceiveProps() {
    if ( this.props.isChoosAble !== this.state.isChoosAble ) {
      this.setState({
        isChoosAble: this.props.isChoosAble
      });
    }
  }

  componentDidMount() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
  }

  handleOnclick = ( playerName ) => {
    if (!this.props.isMove) {
      return;
    }
    console.log('click');
    this.props.onClickHandler( playerName );
    this.setState(
      {
        avatarNotLoaded: true,
      },
      () => {
        // Socket call for getting data --> on success again load it.
        setTimeout(() => {
          this.setState(
            {
              avatarNotLoaded: false,
              revealAvatar: true,
            },
            () => {
              this.setState({
                revealAvatar: true,
              });
            },
          );
        }, 1000);
      },
    );
  };

  render() {
    const {
      playerAvatar,
      playerName,
      playerStatus,
      playerScoreStatus,
      playerScore,
      isMove,
    } = this.props;
    return (
      <div className={`${style['option-container']}`}>
        <div
          className={`${style.avatar} ${
            this.state.avatarNotLoaded
              ? 'animated zoomOut'
              : this.state.revealAvatar
                ? 'animated zoomIn'
                : ''
          } ${
              this.state.isChoosAble
              ? `animated infinite pulse ${style.choose}`
              : ''
          }
          ${
            isMove
            ? `active-move-player`
            : ''
            }
          `}
          onClick={ () => { this.handleOnclick ( { chosenPlayer: playerName } ) } }
        >
          {playerAvatar}
        </div>
        <div className={`${style.name} ${style[`${playerStatus}`]}`}>
          {playerName === this.userProfile.username ? 'You' : playerName}
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
  }
}

Avatar.propTypes = {
  playerName: PropTypes.string,
  playerStatus: PropTypes.string,
  playerScoreStatus: PropTypes.string,
  playerScore: PropTypes.number,
  isChoosAble: PropTypes.bool,
};

export default Avatar;

import React, { Component } from 'react';
import Avatar from '../../components/avatar';
import GameHeader from '../../components/gameHeader';
import Container from '../../components/commons/container';
import Button from '../../components/commons/button';
import GameAnnouncements from '../../components/gameAnnouncements';
import style from './game.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLeaveGame = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Container>
        {/*
            <span> Game Id: { this.props.match.params.gameId } </span>
            <span> Instance Id: { this.props.match.params.instanceId } </span> */}
        <GameAnnouncements message="Loading" theme="loader" mode="loading" />
        <GameHeader message="John is making his turn!" type="game" />
        <div className={style['option-list']}>
          <Avatar
            playerAvatar="🤴"
            playerName="Warne"
            playerStatus="online"
            playerScoreStatus="positive"
            playerScore="230"
          />
          <Avatar
            playerAvatar="🤴"
            playerName="John"
            playerStatus="offline"
            playerScoreStatus="negative"
            playerScore="120"
            isChoosAble
          />
          <Avatar
            playerAvatar="🤴"
            playerName="John"
            playerStatus="offline"
            playerScoreStatus="negative"
            playerScore="120"
            isChoosAble
          />
          <Avatar
            playerAvatar="🤴"
            playerName="John"
            playerStatus="offline"
            playerScoreStatus="negative"
            playerScore="120"
            isChoosAble
          />
        </div>
        <Button
          title="Leave Game"
          type="secondary"
          onClickHandler={this.handleLeaveGame}
        />
      </Container>
    );
  }
}

export default Game;

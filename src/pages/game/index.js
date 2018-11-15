import React, { Component } from 'react';
import Avatar from '../../components/avatar';
import GameHeader from '../../components/gameHeader';
import Container from '../../components/commons/container';
import Button from '../../components/commons/button';
import GameAnnouncements from '../../components/gameAnnouncements';
import style from './game.scss';
import { joinGame, moveGame, subscribeToGame } from '../../apis/game';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: false,
      gameAnnouncementsData: {
        message: '0',
      },
      gameHeaderData: {
        message: 'The game is on!',
        type: 'game',
      },
      isMove: false
    };
    const { gameId, instanceId, username } = this.props.match.params;

    joinGame( gameId, instanceId, username );

    subscribeToGame((err, gameData) => {
      console.log(gameData);
      this.setState({
        gameData,
        isMove: gameData.other.isMove,
        gameHeaderData: gameData.other.status
      }, () => {
        this.forceUpdate();
      })
    });
  }

  handleLeaveGame = () => {
    this.props.history.push('/');
  };

  onChoiceHandler = data => {
    const { gameId, instanceId, username } = this.props.match.params;

    moveGame( { ...data, gameId, instanceId, username } );
    this.setState({
      isMove: false,
      gameAnnouncementsData: {
        message: `Correct!!`,
      },
      gameHeaderData: {
        message: `${
          this.state.gameData.other.activeUser
        } has given his guess! `,
      },
    });
  };

  setMove = () => {
    this.setState({
      isMove: true,
    });
  };

  componentWillMount = () => {
    this.getGameData();
  };

  componentDidMount = () => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.setState({
      userProfile: userProfile || false,
    });
  };

  getGameData = () => {
    const gameData = this.state;
    const loaderId = setInterval(() => {
      this.setState({
        gameAnnouncementsData: {
          message: (
            parseInt(this.state.gameAnnouncementsData.message) + 1
          ).toString(),
        },
      });
    }, 20);

    setTimeout(() => {
      clearInterval(loaderId);
      this.setState({
        gameAnnouncementsData: {
          message: 'Started',
        }
      });
    }, 2000);
  };

  render() {
    const userAvatarMap = {
      KING: '🤴',
      QUEEN: '👸',
      POLICE: '👮',
      THIEF: '🤡',
    };
    return (
      <Container>
        <GameAnnouncements {...this.state.gameAnnouncementsData} />
        <GameHeader {...this.state.gameHeaderData} />
        <div className={style['option-list']}>
          {this.state.gameData &&
            this.state.gameData.players.map((player, index) => (
              <Avatar
                playerAvatar={player.role ? userAvatarMap[player.role] : '❔'}
                playerName={player.username}
                playerStatus={player.userStatus}
                playerScoreStatus={player.scoreStatus}
                playerScore={player.score}
                isChoosAble={ this.state.isMove && !player.isRevealed }
                isMove={this.state.isMove}
                onClickHandler={this.onChoiceHandler}
                key={index}/>
            ))}
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

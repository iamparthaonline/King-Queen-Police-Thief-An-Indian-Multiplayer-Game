import React, { Component } from 'react';
import TextField from '../../components/commons/textField';
import Button from '../../components/commons/button';
import Container from '../../components/commons/container';
import Heading from '../../components/commons/heading';

class createGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: {
        roomId: {
          value: '',
          error: false,
        },
        roomPin: {
          value: '',
          error: false,
        },
      },
    };
  }

  onChangeHandler = event => {
    this.setState({
      name: event.target.value,
    });
    if (event.target.value === '111') {
      this.setState({
        error: 'Error : equals 111',
      });
    } else {
      this.setState({
        error: null,
      });
    }
  };

  handleContinue = () => {
    this.props.history.push('/game/1234/instance/11');
    console.log(this.state.name);
  };

  render() {
    const propsObj = [
      {
        label: 'Room Id',
        name: 'roomId',
        id: 'roomId',
        maxlength: 5,
        placeholder: 'Enter room ID',
        type: 'text',
        onChangeHandler: this.onChangeHandler,
        value: this.state.gameData.roomId.value,
        error: this.state.gameData.roomId.error,
      },
      {
        label: 'Room Pin (optional)',
        name: 'roomPin',
        id: 'roomPin',
        maxlength: 5,
        placeholder: 'Room Pin',
        type: 'text',
        onChangeHandler: this.onChangeHandler,
        value: this.state.gameData.roomId.roomPin,
        error: this.state.gameData.roomPin.error,
      },
    ];
    return (
      <Container>
        <Heading
          title="Enter Room Id and password"
          subtitle="( if no room is there then a new one will be created )"
        />
        <TextField {...propsObj[0]} />
        <TextField {...propsObj[1]} />
        <Button
          title="Continue"
          type="primary"
          onClickHandler={this.handleContinue}
        />
      </Container>
    );
  }
}

export default createGame;

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

  onChangeHandler = ( event ) => {

    switch( event.target.name ) {
      case 'roomId': 
        // console.log(`roomID: ${event.target.value}`);
        break;
      case 'roomPin': 
        // console.log(`roomPin: ${event.target.value}`);
        break;
    }
    this.setState({
      [event.target.name]: event.target.value
    });

  };

  handleContinue = () => {

  const { roomId, roomPin } = this.state.gameData;
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
//   let fetchData = { 
//     method: 'POST', 
//     body: data,
//     headers: new Headers()
// }
//   fetch( url, fetchData ) 
//     .then( ( data ) =>  {
//         console.log( data );
//     })
//     .catch( () =>  {

//     });
    this.props.history.push('/game/1234/instance/11');
    console.log(this.state.gameData.roomId);
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
        value: this.state.gameData.roomId
      },
      {
        label: 'Room Pin (optional)',
        name: 'roomPin',
        id: 'roomPin',
        maxlength: 5,
        placeholder: 'Room Pin',
        type: 'text',
        onChangeHandler: this.onChangeHandler,
        value: this.state.gameData.roomPin
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
        { this.state.gameData.error && 
          <div className="error-label">{ this.state.gameData.error } </div>
        }
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

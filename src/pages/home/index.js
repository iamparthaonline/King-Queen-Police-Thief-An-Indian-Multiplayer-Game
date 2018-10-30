import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import TextField from '../../components/commons/textField';
import Container from '../../components/commons/Container';
import Button from '../../components/commons/button';
import Heading from '../../components/commons/heading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.setState({
      userProfile: userProfile || false,
    });
  }

  onChangeHandler = event => {
    this.setState({
      username: event.target.value,
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
    if (!this.state.userProfile) {
      const userProfile = {
        username: this.state.username,
      };
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
    this.props.history.push('/create-game');
  };

  render() {
    const propsObj = {
      label: 'Username',
      name: 'username',
      id: 'username',
      maxlength: 5,
      placeholder: 'Enter username',
      type: 'text',
      onChangeHandler: this.onChangeHandler,
      value: this.state.username,
      error: this.state.error,
    };
    return (
      <Container>
        {!this.state.userProfile && (
          <div>
            <Heading
              title="Create an Username"
              subtitle="This will be your ID"
            />
            <TextField {...propsObj} />
            <Button
              title="Continue"
              type="primary"
              onClickHandler={this.handleContinue}
            />
          </div>
        )}
        {this.state.userProfile && (
          <div>
            <Heading
              title="Welcome"
              subtitle={this.state.userProfile.username}
            />
            <Button
              title="Continue"
              type="primary"
              onClickHandler={this.handleContinue}
            />
          </div>
        )}
      </Container>
    );
  }
}

export default hot(module)(Home);

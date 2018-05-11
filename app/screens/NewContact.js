import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/Container';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

import { contactCreate } from '../actions/contacts';

class NewContact extends React.Component {
  state = {
    name: '',
    secondName: '',
    number: ''
  };

  handleButtonPress = () => {
    this.props.dispatch(
      contactCreate({
        name: this.state.name,
        secondName: this.state.secondName,
        number: this.state.number
      })
    );
  };

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Text style={{ color: 'white' }}> Name </Text>
          <Input value={this.state.name} handleTextChange={name => this.setState({ name })} />
          <Text style={{ color: 'white' }}> Second Name </Text>
          <Input value={this.state.secondName} handleTextChange={secondName => this.setState({ secondName })} />
          <Text style={{ color: 'white' }}> Number </Text>
          <Input value={this.state.number} handleTextChange={number => this.setState({ number })} /> />
          <AddContactButton text={'CREATE'} onPress={this.handleButtonPress} />
        </View>
      </Container>
    );
  }
}
export default connect()(NewContact);

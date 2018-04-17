import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

import Container from '../components/Container';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

import { createContact } from '../actions/contacts';

class NewContact extends React.Component {
  state = {
    name: '',
    secondName: '',
    number: ''
  };

  handleButtonPress = () => {
    console.log(
      createContact({
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
          <Input />
          <Text style={{ color: 'white' }}> Second Name </Text>
          <Input />
          <Text style={{ color: 'white' }}> Number </Text>
          <Input />
          <AddContactButton text={'CREATE'} onPress={this.handleButtonPress} />
        </View>
      </Container>
    );
  }
}
export default NewContact;

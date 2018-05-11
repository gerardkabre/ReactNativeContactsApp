import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';

import Container from '../components/Container';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

class Register extends React.Component {
  state = {
    name: '',
    password: ''
  };

  handleNameChange = name => {
    this.setState({ name });
  };
  handlePasswordChange = password => {
    this.setState({ password });
  };

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Text style={{ color: 'white' }}> Email </Text>
          <Input value={this.state.name} handleTextChange={this.handleNameChange} />
          <Text style={{ color: 'white' }}> Password </Text>
          <Input value={this.state.password} handleTextChange={this.handlePasswordChange} />
          <AddContactButton />
        </View>
      </Container>
    );
  }
}

export default Register;

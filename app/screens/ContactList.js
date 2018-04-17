import React, { Component } from 'react';

import { View, StatusBar, FlatList, Text } from 'react-native';

import { Redirect } from 'react-router-native';

import Container from '../components/Container';
import Contact from '../components/Contact';
import Separator from '../components/Separator';

import AddContactButton from '../components/AddContactButton';

import data from '../fakeData';

class ContactList extends Component {
  state = {
    redirect: false
  };

  handleButtonPress = () => this.setState({ redirect: true });

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/createContact" />;
    }
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} barStyle="light-content" />
          <FlatList
            data={data}
            // keyExtractor={item => item}
            renderItem={({ item }) => <Contact text={item} />}
            ItemSeparatorComponent={Separator}
          />
          <AddContactButton text={'NEW CONTACT'} onPress={this.handleButtonPress} />
        </View>
      </Container>
    );
  }
}

export default ContactList;

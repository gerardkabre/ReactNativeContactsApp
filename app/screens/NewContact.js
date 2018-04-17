import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';

import Container from '../components/Container';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

import data from '../fakeData';

export default () => (
  <Container>
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Text style={{ color: 'white' }}> Name </Text>
      <Input />
      <Text style={{ color: 'white' }}> Second Name </Text>
      <Input />
      <Text style={{ color: 'white' }}> Number </Text>
      <Input />
      <AddContactButton />
    </View>
  </Container>
);

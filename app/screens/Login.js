import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';

import Container from '../components/Container';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

export default () => (
  <Container>
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Text style={{ color: 'white' }}> Email </Text>
      <Input />
      <Text style={{ color: 'white' }}> Password </Text>
      <Input />
      <AddContactButton />
    </View>
  </Container>
);
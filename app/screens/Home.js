import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Container from '../components/Container';
import Logo from '../components/Logo';
import LogButton from '../components/LogButton';

export default () => (
  <Container>
    <View style={{ alignItems: 'center' }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Logo />
      <LogButton goTo="login" />
      <LogButton goTo="register" />
    </View>
  </Container>
);


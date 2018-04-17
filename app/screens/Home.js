import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { LogButton } from '../components/Logo';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
    <LogButton action="login" />
    <LogButton action="register" />
  </Container>
);

import React from 'react';
import { View, Text } from 'react-native';
import EStylsheet from 'react-native-extended-stylesheet';

const styles = EStylsheet.create({
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: 2
  },
  subtitle: {
    color: '#FEFBFB',
    textAlign: 'center'
  }
});

const Logo = () => (
  <View>
    <Text style={styles.title}> CONTACTS APP</Text>
    <Text style={styles.subtitle}> Manage all your contacts </Text>
  </View>
);

export default Logo;

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import EStylsheet from 'react-native-extended-stylesheet';

const styles = EStylsheet.create({
  button: {
    color: '#fff',
    paddingHeight: 14,
    paddingWidth: 5
  }
});

const LogButton = ({ action }) => (
  <TouchableHighlight style={styles.button}>
    <Text>{action}</Text>
    {(action = 'login' ? <link path="LogInScreen" /> : <link path="RegisterScreen" />)}
  </TouchableHighlight>
);

export default LogButton;

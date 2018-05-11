import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import EStylsheet from 'react-native-extended-stylesheet';

const styles = EStylsheet.create({
  button: {
    marginTop: 20,
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 5,
    borderColor: 'white',
    borderWidth: 1,
    width: 200
  },
  text: {
    color: 'white'
  }
});

const LogButton = ({ goTo }) => (
  <Link style={styles.text} to={`/${goTo}`} component={TouchableHighlight}>
    <Text>{goTo}</Text>
  </Link>
);

export default LogButton;

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: '35%',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  text: {
    color: 'white'
  }
});

const AddContactButton = ({ text, onPress }) => (
  <TouchableHighlight style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

export default AddContactButton;

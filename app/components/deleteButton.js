import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
      color: 'red'
  }
});

const DeleteButton = ({ text, onPress }) => (
  <TouchableHighlight onPress={() => {}} underlayColor={"grey"}>
      <Text style={styles.text}>{'Delete'}</Text>
  </TouchableHighlight>
);

export default DeleteButton;

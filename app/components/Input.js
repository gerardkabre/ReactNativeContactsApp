import React from 'react';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'grey'
  }
});

const Input = ({ text, onPress, value, handleTextChange }) => (
  <View style={{ alignItems: 'center' }}>
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={handleTextChange(input)} />
    </View>
  </View>
);

export default Input;

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DeleteButton from './deleteButton';

const styles = EStyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 14
  },
  underlay: {
    backgroundColor: 'black'
  }
});

const Contact = ({ text, onPress }) => (
  <TouchableHighlight onPress={() => {}} underlayColor={'grey'}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <DeleteButton contact={text} />
    </View>
  </TouchableHighlight>
);

export default Contact;

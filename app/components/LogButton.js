import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
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
    color: 'white',
    


  }
});
// //  { (action = 'login' ? <link path="LogInScreen" /> : <link path="RegisterScreen" />) } 
const LogButton = ({ action }) => (
  <TouchableHighlight  onPress={() => {}} style={styles.button}>
    <Text style={styles.text}>{action}</Text>
   
  </TouchableHighlight>
);

export default LogButton;

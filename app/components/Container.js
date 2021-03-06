import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
    paddingVertical: 25
  }
});

const Container = ({ children }) => <View style={styles.container}>{children}</View>;

export default Container;



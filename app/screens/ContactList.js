import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import Container from '../components/Container';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import AddContactButton from '../components/AddContactButton';

import data from '../fakeData';

export default () => (
  <Container>
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <FlatList
        data={data}
        // keyExtractor={item => item}
        renderItem={({ item }) => <Contact text={item} />}
        ItemSeparatorComponent={Separator}
      />
    <AddContactButton />    
    </View>
    </Container>
  
);

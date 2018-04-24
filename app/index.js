import React from 'react';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/Home';
import ContactList from './screens/ContactList';
import NewContact from './screens/NewContact';

import Container from './components/Container';

EStyleSheet.build({
  $primaryBlue: '#4F6d7A'
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (props.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const index = () => (
  <Container>
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Link to="/contactlist" underlayColor="#f0f4f7">
          <Text>Contacts</Text>
        </Link>
        <Link to="/" underlayColor="#f0f4f7">
          <Text>Home</Text>
        </Link>
        <Switch>
          <PrivateRoute exact path="/" component={ContactList} />
          <PrivateRoute path="/createContact" component={NewContact} />
          <Route path="/login" component={Home} />
        </Switch>
      </View>
    </NativeRouter>
  </Container>
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(index);

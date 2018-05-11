import React from 'react';
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/Home';
import ContactList from './screens/ContactList';
import NewContact from './screens/NewContact';
import Login from './screens/Login';
import Register from './screens/Register';

import Container from './components/Container';

EStyleSheet.build({
  $primaryBlue: '#4F6d7A'
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (props.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/auth" />)}
  />
);

const index = () => (
  <Container>
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route path="/auth" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/" component={ContactList} />
          <PrivateRoute path="/createContact" component={NewContact} />22
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

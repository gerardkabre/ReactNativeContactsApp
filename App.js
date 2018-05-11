import React from 'react';
import AppIndex from './app/index';
import { Provider } from 'react-redux';
import store from './app/config/store';

const App = () => (
  <Provider store={store}>
    <AppIndex />
  </Provider>
);

export default App;

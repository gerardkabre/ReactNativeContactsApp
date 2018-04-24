import AppIndex from './app/index';
import { Provider } from 'react-redux';
import store from './config/store';

const App = () => (
  <Provider store={store}>
    <AppIndex />
  </Provider>
);

export default App;

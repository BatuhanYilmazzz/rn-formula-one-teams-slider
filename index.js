/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store/store';
import React from 'react';

const App2 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default App2;

AppRegistry.registerComponent(appName, () => App2);

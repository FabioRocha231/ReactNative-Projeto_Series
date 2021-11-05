if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configurado meu chapa'),
  );
}
import Reactotron from '../ReactotronConfig';
import React from 'react';
import Router from './Router';

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(reduxThunk), Reactotron.createEnhancer()),
);

const SeriesApp = (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default SeriesApp;

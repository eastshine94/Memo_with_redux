import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/modules';

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
});

const store = createStore(
  rootReducer(),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      logger,
    ),
  ),
)

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.querySelector('#root')
);

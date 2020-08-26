import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer.js';

import './index.css';
import App from './App';

//Creating the store: 
let store = createStore(cardReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>,
  rootElement
);


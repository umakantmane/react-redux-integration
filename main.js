import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App.js';
import { combineReducers,createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import allStore from './src/store/index';

ReactDOM.render(
<Provider store={allStore}>
<App />
</Provider>,
 document.getElementById('app'));
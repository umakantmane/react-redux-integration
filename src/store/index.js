// import { createStore, combineReducers, compose } from 'redux';
// import UserReducer from './reducers/UserReducer';
// import thunk from 'redux-thunk';

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(
//     UserReducer,
//     applyMiddleware(thunk)
// );

import thunk from 'redux-thunk';
import { combineReducers,createStore, applyMiddleware,compose } from 'redux';

import UserReducer from './reducers/UserReducer';
import LayoutReducer from './reducers/LayoutReducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(
    UserReducer,LayoutReducer
);

const allStore = createStore(
    UserReducer,
    storeEnhancers(applyMiddleware(thunk))
);



export default allStore
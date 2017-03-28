import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { default as thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
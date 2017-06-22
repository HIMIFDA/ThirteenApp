import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      ...middlewares
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

export default store;
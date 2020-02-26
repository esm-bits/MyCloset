import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import Config from '../Config';
import { UIActions, UIReducer } from './UI';

type Actions = UIActions;

const logger = createLogger({
  predicate: () => Config.isLoggingEnabled,
});

export default createStore<Store, UIActions, any, any>(
  combineReducers({
    ui: UIReducer,
  }),
  applyMiddleware(logger),
);

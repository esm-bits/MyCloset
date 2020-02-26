import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import Config from '../Config';
import { UIActions, UIReducer } from './UI';
import { UserContentsActions, UserContentsReducer } from './UserContents';

type Actions = UIActions | UserContentsActions;

const logger = createLogger({
  predicate: () => Config.isLoggingEnabled,
});

export default createStore<Store, Actions, any, any>(
  combineReducers({
    ui: UIReducer,
    userContents: UserContentsReducer,
  }),
  applyMiddleware(logger),
);

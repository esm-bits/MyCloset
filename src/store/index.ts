import { AsyncStorage } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';

import Config from '../Config';
import { UIActions, UIReducer } from './UI';
import { UserContentsActions, UserContentsReducer } from './UserContents';

export type Actions = UIActions | UserContentsActions;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['ui'],
};

const logger = createLogger({
  predicate: () => Config.isLoggingEnabled,
});

const rootReducer = persistReducer<Store, Actions>(
  persistConfig,
  combineReducers({
    ui: UIReducer,
    userContents: UserContentsReducer,
  }),
);

export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store);

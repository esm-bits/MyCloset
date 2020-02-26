declare module 'mobx-devtools/lib/mobxDevtoolsBackend';
declare module 'react-native-restart';
declare module 'react-native-vector-icons';

/**
 * Redux
 */
declare type Store = {
  ui: UIState;
};

declare type UIState = {
  isBusy: boolean;
};

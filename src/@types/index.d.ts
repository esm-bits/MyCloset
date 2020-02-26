declare module 'mobx-devtools/lib/mobxDevtoolsBackend';
declare module 'react-native-restart';
declare module 'react-native-vector-icons';

/**
 * Entity
 */
declare type CategoryId = string;
declare type Category = {
  id: CategoryId;
  name: string;
};

declare type DressId = string;
declare type Dress = {
  id: DressId;
  imageFilePath: string;
  name?: string;
  description?: string;
  rating?: number;
  like?: boolean;
};

/**
 * Redux
 */
declare type Store = {
  ui: UIState;
  userContents: UserContentsState;
};

declare type PersistedStore = Store &
  import('redux-persist/es/persistReducer').PersistPartial;

declare type UIState = {
  isBusy: boolean;
};

declare type UserContentsState = {
  categoryList: Category[];
  dressList: Dress[];
  dressListByCategory: Map<CategoryId, DressId[]>;
};

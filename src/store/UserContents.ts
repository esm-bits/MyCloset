import { AnyAction } from 'redux';

const initialState: UserContentsState = Object.freeze({
  categoryList: [
    { id: 'hoge', name: '上着' },
    { id: 'boge', name: '下着' },
  ],
  dressList: [],
  dressListByCategory: new Map(),
} as UserContentsState);

export type UserContentsActions = AnyAction;

export function UserContentsReducer(
  state = initialState,
  action: UserContentsActions,
): UserContentsState {
  return state;
}

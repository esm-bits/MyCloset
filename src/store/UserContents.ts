/**
 * ユーザーが作成するコンテンツ
 */

import UUID from '../helpers/UUID';

const initialState: UserContentsState = Object.freeze({
  categoryList: [
    { id: 'hoge', name: '上着' },
    { id: 'boge', name: '下着' },
  ],
  dressList: [],
  dressListByCategory: new Map(),
} as UserContentsState);

export function UserContentsReducer(
  state = initialState,
  action: UserContentsActions,
): UserContentsState {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      return {
        ...state,
        categoryList: [
          ...state.categoryList,
          ({ ...action.payload.category, id: UUID() } as unknown) as Category,
        ],
      };
    }
    default: {
      return state;
    }
  }
}

export type UserContentsActions = AddCategoryAction;

type AddCategoryAction = {
  type: 'ADD_CATEGORY';
  payload: {
    category: Partial<Category>;
  };
};

import AsyncStorage from '@react-native-community/async-storage';
import { DateTime } from 'luxon';
import { applySnapshot, flow, types } from 'mobx-state-tree';

import Category, { CategoryType } from './models/Category';

export const CategoryListStore = types
  .model('CategoryList', {
    categoryList: types.array(Category),
  })
  .actions(self => ({
    addCategory(category: CategoryType) {
      self.categoryList.push(category);
    },
    /**
     * カテゴリ一覧をAsyncStorageからリロードする
     */
    hydrate: flow(function*() {
      try {
        const data = yield AsyncStorage.getItem('CategoryList');
        if (data) {
          applySnapshot(store, JSON.parse(data));
        }
        (self as any).apply();
      } catch (err) {
        // エラー
      }
    }),
  }));

const now = DateTime.utc().toJSDate();
const store = CategoryListStore.create({
  categoryList: [],
});

export default store;

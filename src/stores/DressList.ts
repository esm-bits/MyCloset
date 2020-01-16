import AsyncStorage from '@react-native-community/async-storage';
import Dress, { DressType } from '@src/stores/models/Dress';
import { applySnapshot, flow, types } from 'mobx-state-tree';
import { actionAsync } from 'mobx-utils';

export const DressListStore = types
  .model('DressList', {
    dressList: types.array(Dress),
  })
  .actions(self => ({
    addDress(dress: DressType) {
      self.dressList.push(dress);
    },
    /**
     * 服一覧をAsyncStorageからリロードする
     */
    hydrate: actionAsync(async () => {
      try {
        const data = await AsyncStorage.getItem('DressList');
        if (data) {
          applySnapshot(store, JSON.parse(data));
        }
        (self as any).apply();
      } catch (err) {
        // エラー
      }
    }),
  }));

const store = DressListStore.create({ dressList: [] });

export default store;

import { applySnapshot, flow, types } from 'mobx-state-tree';
import Dress, { DressType } from '@src/stores/models/Dress';
import { AsyncStorage } from 'react-native';

const DressList = types
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
    hydrate: flow(function*() {
      try {
        const data = yield AsyncStorage.getItem('DressList');
        if (data) {
          applySnapshot(DressList, JSON.parse(data));
        }
        (self as any).apply();
      } catch (err) {
        // エラー
      }
    }),
  }))
  .create({ dressList: [] });

export default DressList;

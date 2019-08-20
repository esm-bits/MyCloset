import { types } from 'mobx-state-tree';
import Dress, { DressType } from '@src/stores/models/Dress';

const DressList = types
  .model('DressList', {
    dressList: types.array(Dress),
  })
  .actions(self => ({
    addDress(dress: DressType) {
      self.dressList.push(dress);
    },
  }))
  .create({ dressList: [] });

export default DressList;

import { Instance, types } from 'mobx-state-tree';
import DressListStore from '../DressList';

const Category = types.model('Category', {
  id: types.number,
  name: types.string,
});

export type CategoryType = Instance<typeof Category>;

export default Category;

import { SnapshotOrInstance, types } from 'mobx-state-tree';

const Category = types.model('Category', {
  id: types.number,
  name: types.string,
  createdAt: types.Date,
  updatedAt: types.Date,
});

export type CategoryType = SnapshotOrInstance<typeof Category>;

export default Category;

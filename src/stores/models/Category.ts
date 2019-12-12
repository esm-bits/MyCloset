import { Instance, types } from 'mobx-state-tree';

const Category = types.model('Category', {
  id: types.number,
  name: types.string,
});

export type CategoryType = Instance<typeof Category>;

export default Category;

import { SnapshotOrInstance, types } from 'mobx-state-tree';

const Dress = types.model('Dress', {
  id: types.number,
  categoryId: types.number,
});

export type DressType = SnapshotOrInstance<typeof Dress>;

export default Dress;

import { SnapshotOrInstance, types } from 'mobx-state-tree';
import Photo from '@src/stores/models/Photo';

const Dress = types.model('Dress', {
  id: types.identifier,
  category: types.string,
  photos: types.optional(types.array(Photo), []),
});

export type DressType = SnapshotOrInstance<typeof Dress>;

export default Dress;

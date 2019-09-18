import { SnapshotOrInstance, types } from 'mobx-state-tree';
import Photo from '@src/stores/models/Photo';
import DressCategory, {
  DressCategoryValue,
} from '@src/stores/enums/DressCategory';

const Dress = types.model('Dress', {
  id: types.identifier,
  category: types.optional(DressCategory, DressCategoryValue.上着),
  photos: types.optional(types.array(Photo), []),
});

export type DressType = SnapshotOrInstance<typeof Dress>;

export default Dress;

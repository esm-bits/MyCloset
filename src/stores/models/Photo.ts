/**
 * 1枚の写真ファイルに相当するモデル
 */

import { SnapshotOrInstance, types } from 'mobx-state-tree';

const Photo = types.model('Photo', {
  tag: types.string,
  width: types.number,
  height: types.number,
});

export type PhotoType = SnapshotOrInstance<typeof Photo>;

export default Photo;
